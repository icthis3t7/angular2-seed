import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LeagueService {
  constructor(private http: Http) {}

  getChampions(org: string) {
    return this.makeRequest('https://ddragon.leagueoflegends.com/cdn/7.2.1/data/en_US/champion.json');
  }

  private makeRequest(path: string) {
    return this.http.get(url)
      .map((res) => res.json());

  }

}
