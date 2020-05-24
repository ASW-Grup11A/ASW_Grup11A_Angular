import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
import {UtilitiesService} from '../services/utilities.service';
import {HttpParams} from '@angular/common/http';
import {ContributionService} from '../services/contribution.service';
import {Contribution} from '../interfaces/contribution';
import {Comment} from '../interfaces/comment';
import {CommentService} from '../services/comment.service';

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
    private contributionService: ContributionService,
    private commentService: CommentService
  ) {
  }

  ngOnInit(): void {
    // this.voteContribution();
    // this.getUser();
    // this.deleteContribution();
    // this.createContribution();
    // this.createComment();
    this.getComment();
    const apiKey = UtilitiesService.createApiKey({username: 'albert.pinto', email: 'albert.pinto@estudiantat.upc.edu'});
    console.log(`Api Key: ${apiKey}`);
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
    const params: HttpParams = new HttpParams();
    const body: object = {
      title: 'I love Minekraft',
      url: 'http://mecagoentusmuertos.com/albert'
    };
    this.contributionService.createContribution(body).subscribe(
      contribution => this.contribution = contribution);
  }

  private deleteContribution() {
    this.contributionService.deleteContribution('1').subscribe();
  }

  private voteContribution() {
    this.contributionService.voteContribution('24').subscribe();
  }

  private createComment() {
    const body: object = {
      text: 'I do really love love love love Minekraft'
    };
    this.commentService.createComment('24', body).subscribe(comment => this.comment = comment);
  }

  private getComment() {
    this.commentService.getComment('34').subscribe(comment => this.comment = comment);
  }
}
