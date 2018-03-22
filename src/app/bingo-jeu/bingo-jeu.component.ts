import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { glisseAnimation, apparaitAnimation } from '../animations/index';
import { ActivatedRoute } from '@angular/router';
import { BingoService } from '../bingo.service';
// http://touchetlaurent.fr/developments/spinning-game/
// https://codepen.io/AndreCortellini/pen/vERwmL

@Component({
  selector: 'app-bingo-jeu',
  templateUrl: './bingo-jeu.component.html',
  styleUrls: ['./bingo-jeu.component.css'],
  // Gérer les animations
  animations: [ glisseAnimation, apparaitAnimation ],
  // Attacher l'animation de glissé sur le root (host)
  host: { '[@glisseAnimation]': '' }
})
export class BingoJeuComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('roueInner') roueInterieur: ElementRef;

  promo:string; // Valeur de la promo récupérée de l'URL
  sub:any; // Souscrire aux paramètres de l'URL

  // La roue tourne : degres, nombre de clics sur le bouton de jeu = 0
  degres = 1800;
  clics:number = 0;
  score=0;
  scorePromo:number=0;

  // Version avec le cochon
  piece:boolean=false;

  // Un niveau est gagné, c'est la fête !
  score_cumule:number=250; // Score actuel
  score_pos:string='250px';
  levelUp:boolean;

  audioPiece = new Audio('assets/images/sons/Tadaaa.mp3');
  audioUp = new Audio('assets/images/sons/Taratata.mp3');

  // Tableau des gains de la roue
  gains:number[] = [1,2,3,5,10,25];
  cadeaux:object[] = [{pos:'10px', cadeau:'Une soirée ciné'}, {pos:'100px', cadeau:'Un repas de classe !'}, {pos:'250px', cadeau:'Un deuxième repas de classe !!'}, {pos:'400px', cadeau:'Un super voyage de classe !!!'}];
  cadeau:string="";
  constructor(private route: ActivatedRoute, private bingoServ: BingoService) { }
  
  ngOnInit() {
    console.log(this.promo);
    // Synchro avec l'adresse pour récupérer la promo
    this.sub = this.route.params.subscribe(params => {
      this.promo = params['promo'];
      // Récupérer le score de la bonne promo dans le service
      if(this.promo){
        // Lancer le chargement des données
        this.bingoServ.getPromoScore(this.promo).subscribe(score =>{
          // Vérification du score avant une mise à jour
          if(score>=0){
            this.scorePromo = score;
          }
          console.log("Score promo", this.scorePromo);
        });
      }
   });
  }

  ngAfterViewInit() {
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  clicTirelire(): void {
    // alert("Tirelire cliquée");
    this.piece = !this.piece;
    setTimeout (() => {
      this.piece = !this.piece;
    }, 1000);
    this.audioPiece.play();
  }
  
  /*WHEEL SPIN FUNCTION*/
  lanceJeu = function(){
      //add 1 every click
      this.clics ++;
      this.score = 0;
      
      /*Multiplier les degrés par le nombre de clics
      Nombre aléatoire entre 1 - 360*/
      let degreTmp = this.degres*this.clics;
      let extraDegre = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
      let totalDegre = degreTmp+extraDegre;

      this.roueInterieur.nativeElement.style="transform:rotate("+totalDegre+"deg)";

      // Calcul du score après la fin de l'animation
      if(this.getScore){
        clearTimeout(this.getScore);
      }
      // Lancer un timer pour modifier le score à la fin
      this.getScore = setTimeout(() => {
        let tmp_score:number = Math.round(6*(1-eval((totalDegre/360-Math.trunc(totalDegre/360)).toFixed(1))));
        this.score = this.gains[tmp_score-1];
        this.scorePromo += this.gains[tmp_score-1];
        // Ecriture des scores
        this.bingoServ.ecritPromoScore(this.promo, this.scorePromo);
      }, 5000);
    };
    
}
