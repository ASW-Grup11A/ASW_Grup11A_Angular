import { Component, OnInit } from '@angular/core';
import { Comment } from "../interfaces/comment";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentService } from "../services/comment.service";
import { HttpParams } from "@angular/common/http";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";
import {ContributionService} from "../services/contribution.service";
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private commentService: CommentService,
    private contributionService: ContributionService
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getComments();
  }

  getUser():void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.userService.getUserProfile(this.username)
      .subscribe(user => this.user = user);
  }

  getComments():void {
    let params = new HttpParams();
    params = params.append('username', this.username);
    this.commentService.getAllComments(params).subscribe(comments => this.comments = comments);
  }

  voteComment(id:string):void {
    this.contributionService.voteContribution(id).subscribe();
    window.location.reload();
  }

  unvoteComment(id:string):void {
    this.contributionService.unvoteContribution(id).subscribe();
    window.location.reload();
  }

}
