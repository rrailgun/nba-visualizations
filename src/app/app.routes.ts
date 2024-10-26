import { Routes } from '@angular/router';
import { PlayerPageComponent } from './pages/player-page/player-page.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'player/:playerId',
        component: PlayerPageComponent
    }
];
