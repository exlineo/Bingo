import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  id:object;
  conne:boolean = false;
  constructor() {
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
    }
  }
  // Déconnexion
  setDeconne(){
    this.conne = false;
    sessionStorage.setItem('conne', 'false');
  }

}
