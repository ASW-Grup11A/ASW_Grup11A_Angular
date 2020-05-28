import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ContributionService} from "../services/contribution.service";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";
import {Contribution} from "../interfaces/contribution";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-contributions-main',
  templateUrl: './contributions-main.component.html',
  styleUrls: ['./contributions-main.component.css']
})
export class ContributionsMainComponent implements OnInit {
  user: User;
  displayedContributions: Contribution[];
  displayIndex: number;
  allContributions: Contribution[];
  highlight: string;
  more: boolean;
  max: number;
  index: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private contributionService: ContributionService
  ) { }

  ngOnInit(): void {
    this.highlight="";
    this.max=30;
    this.index=0;
    this.displayIndex=0;
    this.getUser();
    this.getContributions();
  }

  private getUser() {
    this.userService.getUserProfile('sgmarcsg')
      .subscribe(user => this.user = user);
  }

  private getContributions() {
    let params: HttpParams = new HttpParams();
    this.contributionService.getAllContributions(params)
      .subscribe(contributions => this.allContributions = contributions)
  }

  clickMore() {
    this.max=this.max+30;
    this.assignContributions();
  }

  private assignContributions() {
    this.displayedContributions = [];
    for (; this.index < ContributionsMainComponent.min(this.max, this.allContributions.length); this.index++){
      this.displayedContributions.push(this.allContributions[this.index]);
    }
    this.more=this.allContributions.length>=this.max;
  }

  private static min(a: number, b: number): number {
    return (a<b)?a:b;
  }

  incrementDisplayIndex(): number{
    return ++this.displayIndex;
  }

  voteContribution(contributionId: number) {

  }

  unvoteContribution(contributionId: number) {

  }

  hideContribution(contributionId: number) {

  }

  unhideContribution(contributionId: number) {

  }

  naturaltime(date: string): string {
    return "";
  }

  googleSearch(stringToSearch:string) {
    let baseUrl = 'https://www.google.com/search?q=';
    window.location.href = baseUrl + stringToSearch;
  }
}
