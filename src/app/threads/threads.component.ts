import { Component, OnInit } from '@angular/core';
import { Comment } from "../interfaces/comment";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentService } from "../services/comment.service";
import { HttpParams } from "@angular/common/http";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";
import {ContributionService} from "../services/contribution.service";
import {ApiKeyManagerService} from "../services/api-key-manager.service";
import {Contribution} from "../interfaces/contribution";

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  comments: Comment[];
  user: User;
  username: string;
  currentUser: string;

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
    this.currentUser=this.apiKeyManager.username;
    this.username = this.route.snapshot.queryParamMap.get('username');
    this.userService.getUserProfile(this.username)
      .subscribe(user => this.user = user);
  }

  getComments():void {
    let params = new HttpParams();
    params = params.append('hidden', 'false');
    params = params.append('username', this.username);
    params = params.append("orderBy", "publication_time_desc");
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
