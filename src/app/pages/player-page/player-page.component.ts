import { Component } from '@angular/core';
import { ShotChartComponent } from "../../charts/shot-chart/shot-chart.component";
import { PlayerDataService } from '../../services/player-data.service';
import Player from '../../models/Player';
import { Observable } from 'rxjs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { MatInputModule } from "@angular/material/input"

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [ShotChartComponent, MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, AsyncPipe, MatInputModule],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {
    playerId: string;
    playerList: Observable<Player[]>;
    playerSearch = new FormControl('');

    constructor(private playerApi: PlayerDataService) {
        this.playerList = playerApi.getPlayers();
        this.playerSearch.valueChanges.subscribe( res => this.playerId=res)

    }
}
