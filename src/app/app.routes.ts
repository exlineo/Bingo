import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BingoJeuComponent } from './bingo-jeu/bingo-jeu.component';
import { BingoConfigComponent } from './bingo-config/bingo-config.component';
import { BingoConneComponent } from './bingo-conne/bingo-conne.component';
import { PasBingoComponent } from './pas-bingo/pas-bingo.component';

export const ROUTES: Routes = [
    { path: '', redirectTo: '/jeu/SP', pathMatch: 'full' },
    { path: 'jeu', component: BingoJeuComponent },
    { path: 'jeu/:promo', component: BingoJeuComponent },
    { path: 'config', component: BingoConfigComponent },
    { path: 'connexion', component: BingoConneComponent },
    { path: '**', component: PasBingoComponent }
];