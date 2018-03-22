import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { BingoMenuComponent } from './bingo-menu/bingo-menu.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { BingoConfigComponent } from './bingo-config/bingo-config.component';
import { BingoConneComponent } from './bingo-conne/bingo-conne.component';
import { BingoJeuComponent } from './bingo-jeu/bingo-jeu.component';
import { PasBingoComponent } from './pas-bingo/pas-bingo.component';

import { BingoService } from './bingo.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    BingoMenuComponent,
    BingoConfigComponent,
    BingoConneComponent,
    BingoJeuComponent,
    PasBingoComponent
  ],
  providers: [BingoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
