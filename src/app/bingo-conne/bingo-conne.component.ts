import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bingo-conne',
  templateUrl: './bingo-conne.component.html',
  styleUrls: ['./bingo-conne.component.css']
})
export class BingoConneComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
