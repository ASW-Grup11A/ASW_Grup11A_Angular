import { Component, OnInit } from '@angular/core';
import {Contribution} from "../interfaces/contribution";
import {User} from "../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ContributionService} from "../services/contribution.service";
import {HttpParams} from "@angular/common/http";
import {ApiKeyManagerService} from "../services/api-key-manager.service";

@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.css']
})
export class MainListComponent implements OnInit {
  contributions: Contribution[];
  user: User;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private contributionService: ContributionService,
    private apiKeyManager: ApiKeyManagerService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getContributions();
  }

  getUser():void {
    this.username=this.apiKeyManager.username;
    this.userService.getUserProfile(this.username)
      .subscribe(user => this.user = user);
  }

  getContributions():void {
    let params = new HttpParams();
    params = params.append('hidden', 'false');
    params = params.append("orderBy", "votes_desc");
    // Hem d'obtenir soles les que no estan amagades
    this.contributionService.getAllContributions(params).subscribe(contributions =>
      this.contributions = contributions);
  }

  goToUrl(url:string) {
    window.location.href = url;
  }

  googleSearch(stringToSearch:string) {
    let baseUrl = 'https://www.google.com/search?q=';
    window.location.href = baseUrl + stringToSearch;
  }

  voteContribution(id:string):void {
    this.contributionService.voteContribution(id).subscribe();
    for (const i in this.contributions){
      if (this.contributions[i].id.toString()==id) {
        this.contributions[i].liked=true;
        this.contributions[i].points++;
      }
    }
    this.sortContributionsByPoints();
  }

  unvoteContribution(id:string):void {
    this.contributionService.unvoteContribution(id).subscribe();
    for (const i in this.contributions){
      if (this.contributions[i].id.toString()==id) {
        this.contributions[i].liked=false;
        this.contributions[i].points--;
      }
    }
    this.sortContributionsByPoints();
  }

  hideContribution(id:string):void {
    this.contributionService.hideContribution(id).subscribe();
    this.contributions = this.contributions.filter( contribution => contribution.id.toString() !== id);
    this.sortContributionsByPoints();
  }

  sortContributionsByPoints () {
    this.contributions.sort(function (a: Contribution, b: Contribution) {
      if (a.points>b.points) {
        return -1;
      }
      if (a.points<b.points) {
        return 1;
      }
      if (a.publication_time>b.publication_time) {
        return -1;
      }
      if (a.publication_time<b.publication_time) {
        return 1;
      }

      return 0;
    });
  }
}
