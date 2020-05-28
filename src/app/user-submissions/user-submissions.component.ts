import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {Contribution} from "../interfaces/contribution";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ContributionService} from "../services/contribution.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-user-submissions',
  templateUrl: './user-submissions.component.html',
  styleUrls: ['./user-submissions.component.css']
})
export class UserSubmissionsComponent implements OnInit {
  contributions: Contribution[];
  user: User;
  username: string;

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
    this.username = this.route.snapshot.queryParamMap.get('username');
    this.userService.getUserProfile(this.username)
      .subscribe(user => this.user = user);
  }

  getContributions():void {
    let params = new HttpParams();
    params = params.append('username', this.username);
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
}
