import { Component, OnInit } from '@angular/core';
import {Contribution} from "../interfaces/contribution";
import {User} from "../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ContributionService} from "../services/contribution.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-voted-submissions-list',
  templateUrl: './voted-submissions-list.component.html',
  styleUrls: ['./voted-submissions-list.component.css']
})
export class VotedSubmissionsListComponent implements OnInit {
  contributions: Contribution[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private contributionService: ContributionService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getContributions();
  }

  getUser():void {
    let username = 'xavicampos99';
    this.userService.getUserProfile(username)
      .subscribe(user => this.user = user);
  }

  getContributions():void {
    let params = new HttpParams();
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
    console.log("vote contribution " + id.toString());
    this.contributionService.voteContribution(id).subscribe();
    window.location.reload();
  }

  unvoteContribution(id:string):void {
    console.log("unvote contribution " + id.toString());
    this.contributionService.unvoteContribution(id).subscribe();
    window.location.reload();
  }

  myVotedContributions():Contribution[] {
    return this.contributions.filter(x => x.liked && x.user_id != this.user.username);
  }

}
