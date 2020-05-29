import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {Contribution} from "../interfaces/contribution";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ContributionService} from "../services/contribution.service";
import {HttpParams} from "@angular/common/http";
import {ApiKeyManagerService} from "../services/api-key-manager.service";

@Component({
  selector: 'app-user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.css']
})
export class UserSubmissionsComponent implements OnInit {
  contributions: Contribution[];
  user: User;
  username: string;
  currentUser: string;

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
    this.currentUser=this.apiKeyManager.username;
    this.username = this.route.snapshot.queryParamMap.get('username');
    this.userService.getUserProfile(this.username)
      .subscribe(user => this.user = user);
  }

  getContributions():void {
    let params = new HttpParams();
    params = params.append('hidden', 'false');
    params = params.append('username', this.username);
    params = params.append("orderBy", "publication_time_desc");
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
    this.sortContributionsByDate();
  }

  unvoteContribution(id:string):void {
    this.contributionService.unvoteContribution(id).subscribe();
    for (const i in this.contributions){
      if (this.contributions[i].id.toString()==id) {
        this.contributions[i].liked=false;
        this.contributions[i].points--;
      }
    }
    this.sortContributionsByDate();
  }

  sortContributionsByDate () {
    this.contributions.sort(function (a: Contribution, b: Contribution) {
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
