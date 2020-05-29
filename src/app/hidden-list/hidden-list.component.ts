import { Component, OnInit } from '@angular/core';
import {Contribution} from "../interfaces/contribution";
import {User} from "../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ContributionService} from "../services/contribution.service";
import {ApiKeyManagerService} from "../services/api-key-manager.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-hidden-list',
  templateUrl: './hidden-list.component.html',
  styleUrls: ['./hidden-list.component.css']
})
export class HiddenListComponent implements OnInit {
  contributions: Contribution[];
  user: User;

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
    this.userService.getUserProfile(this.apiKeyManager.username)
      .subscribe(user => this.user = user);
  }

  getContributions():void {
    let params = new HttpParams();
    params = params.append('hidden', 'true');
    params = params.append("orderBy", "votes_desc");
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

  unhideContribution(id:string):void {
    this.contributionService.unhideContribution(id).subscribe();
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
