import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShotChartComponent } from "../../charts/shot-chart/shot-chart.component";

@Component({
  selector: 'app-player-page',
  standalone: true,
  imports: [ShotChartComponent],
  templateUrl: './player-page.component.html',
  styleUrl: './player-page.component.scss'
})
export class PlayerPageComponent {
    playerId: string;

    constructor(private route: ActivatedRoute) {
        this.playerId = this.route.snapshot.paramMap.get('playerId');
    }
}
