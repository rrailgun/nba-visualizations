import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Observable } from 'rxjs';
import Player from '../../models/Player';
import { PlayerDataService } from '../../services/player-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatAutocompleteModule, MatFormFieldModule, ReactiveFormsModule, AsyncPipe, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    playerList: Observable<Player[]>;
    playerSearch = new FormControl('');
    
    constructor(
        private playerApi: PlayerDataService,
        private router: Router
    ) {
        this.playerList = playerApi.getPlayers();
        this.playerSearch.valueChanges.subscribe( res => {
            this.router.navigateByUrl(`/player/${res}`);
        })
    }
}
