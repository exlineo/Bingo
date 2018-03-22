import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  vasY(adr:string, params:object=null):void{
    console.log(params);
    !params ? this.router.navigate([adr]) : this.router.navigate([adr, params]);
  }
}
