import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ShotChartComponent } from "./charts/shot-chart/shot-chart.component";
import { PlayerPageComponent } from "./pages/player-page/player-page.component";
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule, MatSelectionList } from '@angular/material/list';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PlayerDataService } from './services/player-data.service';
import Player from './models/Player';
import { map, Observable, startWith } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormControl } from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, 
    RouterOutlet, ShotChartComponent, PlayerPageComponent, 
    MatSidenavModule, MatListModule, MatSelectModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  players: Observable<Player[]>;
  filteredOptions: Observable<Player[]>;
  playerFormControl = new FormControl();

  constructor(private playerApi: PlayerDataService,
    private router: Router
  ) {
    this.players = playerApi.getPlayers();
    this.playerFormControl.valueChanges.subscribe(res => this.navigate(`player/${res}`))
  }

  navigate(route: string) {
    this.router.navigateByUrl(route);
  }

}
