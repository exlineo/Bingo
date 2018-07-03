import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

/**
 * Connexion au jeu pour y accéder
 */
@Component({
  selector: 'app-bingo-conne',
  templateUrl: './bingo-conne.component.html',
  styleUrls: ['./bingo-conne.component.css']
})
export class BingoConneComponent implements OnInit {
  /**
   * 
   * @param auth - Instanciation du service d'authentification
   */
  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
