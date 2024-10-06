import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShotChartComponent } from "./charts/shot-chart/shot-chart.component";
import { PlayerPageComponent } from "./pages/player-page/player-page.component";
import { MatSidenavModule } from "@angular/material/sidenav"
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShotChartComponent, PlayerPageComponent, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nba-visualizations';

  constructor() {}
}
