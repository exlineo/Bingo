import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BingoService {

  constructor(private http: HttpClient) { }

  getPromos():void{
    this.http.get('assets/datas/promos.js').subscribe(promos => {
      // Renvoyer la liste des promos depuis le fichier promos.js
      return promos;
    });
  }

  // Récupérer le score d'une promo spécifique
  getPromoScore(promo:string):Observable<number>{
      return this.http.get<number>('assets/datas/'+promo+'.js');
      /*.subscribe(score => {
        // Renvoyer la liste des promos depuis le fichier promos.js
        console.log("Score", typeof(score), score);
        return score;
      });*/
  }

  // Ecris score
  ecritPromoScore(adr:string, score:number):void{
    let promo:object = {adr:adr, score:score};
    this.http.post('assets/datas/scores.php', promo).subscribe(scoreEcrit => {
      // Renvoyer la liste des promos depuis le fichier promos.js
      return scoreEcrit;
    });
}
}
