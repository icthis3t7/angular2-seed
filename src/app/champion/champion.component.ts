import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LeagueService } from '../services/league.service';

@Component({
  selector: 'champions',
  templateUrl: './champion.component.html',

})


export class ChampionComponent {

  constructor(private router: Router, private dataDragon: LeagueService) {
  }

  getChampions() {
    this.dataDragon.getChampions()
      .subscribe(({name}) => {
        console.log(name);
        this.router.navigate(['/github', orgName]);
      });
  }

}
