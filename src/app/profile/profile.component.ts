import {Component, Input, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {UserService} from "../services/user.service";
import {HttpParams} from "@angular/common/http";
import {ContributionService} from "../services/contribution.service";
import {Contribution} from "../interfaces/contribution";
import {Comment} from "../interfaces/comment";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  contribution: Contribution;
  comment: Comment;

  constructor(
    private userService: UserService,
    private contributionService: ContributionService
  ) {
  }

  ngOnInit(): void {
    this.getUser();
    this.deleteContribution();
    //this.createContribution();
  }

  private getUser() {
    this.userService.getUserProfile('sgmarcsg').subscribe(user => this.user = user);
  }

  private updateAbout() {
    let params: HttpParams = new HttpParams();
    params = params.append('about', 'I love Minekraft');
    this.userService.updateUserProfile(params).subscribe(user => this.user = user);
  }

  private createContribution() {
    let params: HttpParams = new HttpParams();
    let body: object = {
      title: "I love Minekraft",
      url: "http://mecagoentusmuertos.com/albert"
    }
    this.contributionService.createContribution(body).subscribe(
      contribution => this.contribution = contribution);
  }

  private deleteContribution() {
    this.contributionService.deleteContribution("5");
  }
}
