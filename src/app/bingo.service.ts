import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import { Jalons } from './model/jalons';
/**
 * Service injectable pour gérer les données chargées dynamiquement
 */
@Injectable()
export class BingoService {
  /**
   * Instanciation de la classe BingoService
   * @param http - Service HttpClient Angular
   */
  constructor(private http: HttpClient) { }
  /**
   * Récupérer la liste des promotions disponibles
   * @deprecated
   */
  getPromos():void{
    this.http.get('assets/datas/promos.js').subscribe(promos => {
      // Renvoyer la liste des promos depuis le fichier promos.js
      return promos;
    });
  }
  /**
   * Récupérer le score d'une promo spécifique
   */
  getPromoScore(promo:string):Observable<number>{
      return this.http.get<number>('assets/datas/'+promo+'.js');
  }
  /**
   * Ecrit score
   * @param adr - Adresse où transmettre le score à écrire (PHP)
   * @param score - Le score a écrire dans le fichier
   */
  ecritPromoScore(adr:string, score:number):void{
    // Vérification qu'une promo a été choisie
    if(adr){
      let promo:object = {'adr':adr, 'score':score};
      console.log(promo);
      // Ecriture du score dans le fichier idoine
      this.http.post('assets/datas/scores.php', promo).subscribe(scoreEcrit => {
        // Renvoyer la liste des promos depuis le fichier promos.js
        console.log(scoreEcrit);
      });
    }
  }
  /**
   * Chargement du tableau des jalons pour le calcul des gains
   */
  getJalons(promo:string):Observable<Jalons[]>{
    // Chargement du fichier des jalons à partir du nom de la promo
    return this.http.get<Jalons[]>('assets/datas/'+promo+".jalons.js");
  }
}
