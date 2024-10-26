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
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [ShotChartComponent, MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, AsyncPipe, MatInputModule],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {
    playerId: string;
    careerData: any;
    yearSelected: string;
    yearList: string[] = [];
    selectedYear = new FormControl('2024-25');

    constructor(private playerApi: PlayerDataService, private route: ActivatedRoute) {
        this.playerId = this.route.snapshot.paramMap.get('playerId');
        this.careerData = playerApi.getCareerData(this.playerId, '00');
        this.careerData.subscribe(res => {
            console.log(res.SeasonRankingsRegularSeason)
            res.SeasonRankingsRegularSeason.forEach(element => {
                this.yearList.push(element.SEASON_ID)
            });
        }) 
    }
}
