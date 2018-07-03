import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  id:object;
  conne:boolean = false;
  constructor(private route:Router) {
    this.id = {id:'coucou', mdp:'cava?'};
    if(sessionStorage.getItem('conne')){
      this.conne = eval(sessionStorage.getItem('conne'));
    }
  }
  // test de connexion
  setConne(id:object){
    if(id['id'] == this.id['id'] && id['mdp'] == this.id['mdp']){
      this.conne = true;
      sessionStorage.setItem('conne', String(this.conne));
      this.route.navigate(['/jeu', 'SP']);
    }
  }
  // Déconnexion
  setDeconne(){
    this.conne = false;
    sessionStorage.setItem('conne', 'false');
    this.route.navigateByUrl("/connexion");
  }

}
