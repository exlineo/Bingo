import { Component, ViewChild, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-bingo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Bingo -- Allez-vous gagner ?';

  constructor(public auth:AuthService, private route:Router){
    if(auth.conne){
      this.route.navigateByUrl('/jeu/SP');
    }
  }
}
