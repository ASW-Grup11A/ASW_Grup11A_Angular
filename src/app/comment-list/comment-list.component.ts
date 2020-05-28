import { Component, OnInit } from '@angular/core';
import {Comment} from "../interfaces/comment";
import {User} from "../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {CommentService} from "../services/comment.service";
import {HttpParams} from "@angular/common/http";
import {ApiKeyManagerService} from "../services/api-key-manager.service";
import {Contribution} from "../interfaces/contribution";
import {ContributionService} from "../services/contribution.service";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];
  username: string;

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
    this.getComments();
  }

  getUser():void {
    this.username=this.apiKeyManager.username;
  }

  getComments():void {
    let params = new HttpParams();
    this.commentService.getAllComments(params).subscribe(comments => this.comments = comments);
  }

  voteComment(id:string):void {
    this.contributionService.voteContribution(id).subscribe();
    for (const i in this.comments){
      if (this.comments[i].id.toString()==id) {
        this.comments[i].liked=true;
        this.comments[i].points++;
      }
    }
    this.sortCommentsByDate();
  }

  unvoteComment(id:string):void {
    this.contributionService.unvoteContribution(id).subscribe();
    for (const i in this.comments){
      if (this.comments[i].id.toString()==id) {
        this.comments[i].liked=false;
        this.comments[i].points--;
      }
    }
    this.sortCommentsByDate();
  }

  private sortCommentsByDate() {
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
