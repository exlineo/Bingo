import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Menu avec les différents liens vers les routes
 * @class
 */
@Component({
  selector: 'app-bingo-menu',
  templateUrl: './bingo-menu.component.html',
  styleUrls: ['./bingo-menu.component.css']
})
export class BingoMenuComponent implements OnInit {
  vue:boolean=true;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  /**
   * 
   * @param adr - Accéder à une adresse
   * @param params - Paramètres à transmettre à l'adresse
   */
  vasY(adr:string, params:string=null):void{
    console.log(params);
    !params ? this.router.navigate([adr]) : this.router.navigate([adr, params]);
  }
}
