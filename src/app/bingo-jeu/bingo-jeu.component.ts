import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { glisseAnimation, apparaitAnimation } from '../animations/index';
import { ActivatedRoute } from '@angular/router';
import { BingoService } from '../bingo.service';
import { Jalons } from '../model/jalons';
// http://touchetlaurent.fr/developments/spinning-game/
// https://codepen.io/AndreCortellini/pen/vERwmL

@Component({
  selector: 'app-bingo-jeu',
  templateUrl: './bingo-jeu.component.html',
  styleUrls: ['./bingo-jeu.component.css'],
  // Gérer les animations
  animations: [glisseAnimation, apparaitAnimation],
  // Attacher l'animation de glissé sur le root (host)
  host: { '[@glisseAnimation]': '' }
})
export class BingoJeuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('roueInner') roueInterieur: ElementRef;

  promo: string; // Valeur de la promo récupérée de l'URL
  sub: any; // Souscrire aux paramètres de l'URL

  // La roue tourne : degres, nombre de clics sur le bouton de jeu = 0
  degres = 1800; // Le nombre de tours initiaux
  clics: number = 0; // Les clics sur le boutons de la roue
  score = 0; // Le score joué
  scorePromo: number = 0; // Le score de la promo choisie
  jalons: Array<Jalons>; // Les jalons pour les gains
  jalonActuel:number; // Connaitre le jalon actuel
  seuil: number; // seuil des gains
  getScore: any; // le timeout pour la rotation de la roue

  // Un niveau est gagné, c'est la fête !
  score_pos: string = '500px'; // Position de la ligne de score sur la barre d'affichage
  levelUp: boolean = false; // Un niveau est gagné
  gains: number[] = [1, 2, 3, 5, 10, 25]; // Tableau des gains lorsque la roue a tourné

  audioPiece = new Audio('assets/sons/Tadaaa.mp3'); // Jouer des sons lors d'événements
  audioUp = new Audio('assets/sons/Taratata.mp3');

  constructor(private route: ActivatedRoute, private bingoServ: BingoService) { }
  // Initialisation du composant
  ngOnInit() {
    console.log(this.promo);
    // Synchro avec l'adresse pour récupérer la promo
    this.sub = this.route.params.subscribe(params => {
      this.promo = params['promo'];
      // Récupérer le score de la bonne promo dans le service
      if (this.promo) {
        // Lancer le chargement des données
        this.bingoServ.getPromoScore(this.promo).subscribe(score => {
          // Vérification du score avant une mise à jour
          if (score >= 0) {
            this.scorePromo = score;
            this.setScorePosition(); // régler la position du score
          }
        });
        // Récupération des jalons de la promo
        this.bingoServ.getJalons(this.promo).subscribe(jalons => {
          this.jalons = jalons;
          console.log(this.jalons);
          // Attribution du seuil initial des gains
          this.seuil = this.calculeSeuil();
        });

      }
    });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /*WHEEL SPIN FUNCTION*/
  lanceJeu() {
    // Ajouter 1 à chaque clic
    this.clics++;
    this.score = 0;

    /*Multiplier les degrés par le nombre de clics
    Nombre aléatoire entre 1 - 360*/
    let degreTmp = this.degres * this.clics;
    let extraDegre = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
    let totalDegre = degreTmp + extraDegre;

    this.roueInterieur.nativeElement.style = "transform:rotate(" + totalDegre + "deg)";

    // Calcul du score après la fin de l'animation
    if (this.getScore) {
      clearTimeout(this.getScore);
    }
    // Lancer un timer pour modifier le score à la fin
    this.getScore = setTimeout(() => {
      let tmp_score: number = Math.round(6 * (1 - eval((totalDegre / 360 - Math.trunc(totalDegre / 360)).toFixed(1)))) || 0;
      this.score = this.gains[tmp_score - 1];
      this.scorePromo += this.gains[tmp_score - 1]; // Calcul du nouveau score
      this.setScorePosition();
      // Ecriture des scores
      this.bingoServ.ecritPromoScore(this.promo, this.scorePromo);
      // Calcul du nouveau seuil et attribution d'un gain éventuel
      if (this.calculeSeuil() > this.seuil) {
        this.seuil = this.calculeSeuil(); // Le nouveau seuil pour le jeu
        this.ouaiiisGagneeee(); // Affichage du gain
      }
    }, 5000);
  };
  // Positionner le score sur l'affichage
  setScorePosition() {
    let pos = 500 - this.scorePromo;
    this.score_pos = pos + "px";
  }

  // Calcul des jalons, somme-nous au-dessus d'un seuil ?
  calculeSeuil(): number {
    let s = 0;
    for (var i = 0; i < this.jalons.length; i++) {
      if (this.scorePromo >= this.jalons[i].val) {
        s = i;
      }
    }
    return s;
  }
  // Calculer le jalon actuel
  getJalonActuel() {
    for(let i of this.jalons){
      if (this.scorePromo >= i.val) {
        this.jalonActuel = i.val;
      }
    }
  }
  // Un cadeau a été gagné !
  ouaiiisGagneeee() {
    this.audioUp.play();
    this.levelUp = true;
  }
  // Cacher le gain si c'est too much
  cacheBingo() {
    this.audioUp.pause();
    this.levelUp = false;
  }
}
