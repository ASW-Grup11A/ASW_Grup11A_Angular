import { Component, OnInit } from '@angular/core';
import {Contribution} from "../interfaces/contribution";
import {User} from "../interfaces/user";
import {Comment} from "../interfaces/comment";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {ContributionService} from "../services/contribution.service";
import {ApiKeyManagerService} from "../services/api-key-manager.service";
import {HttpParams} from "@angular/common/http";
import {CommentService} from "../services/comment.service";

@Component({
  selector: 'app-voted-comments-list',
  templateUrl: './voted-comments-list.component.html',
  styleUrls: ['./voted-comments-list.component.css']
})
export class VotedCommentsListComponent implements OnInit {
  comments: Comment[];
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private commentService: CommentService,
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
    params = params.append('hidden', 'false');
    params = params.append('liked', 'true');
    params = params.append("orderBy", "publication_time_desc");
    this.commentService.getAllComments(params).subscribe(comments =>
      this.comments = comments);
  }


  voteComment(id:string):void {
    this.contributionService.voteContribution(id).subscribe();
    for (const i in this.comments){
      if (this.comments[i].id.toString()==id) {
        this.comments[i].liked=true;
        this.comments[i].points++;
      }
    }
    this.sortContributionsByDate();
  }

  unvoteComment(id:string):void {
    this.contributionService.unvoteContribution(id).subscribe();
    this.comments = this.comments.filter( comment => comment.id.toString() !== id);
    this.sortContributionsByDate();
  }

  sortContributionsByDate () {
    this.comments.sort(function (a: Contribution, b: Contribution) {
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
