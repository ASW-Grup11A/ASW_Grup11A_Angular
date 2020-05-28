import { Component, OnInit } from '@angular/core';
import {Comment} from "../interfaces/comment";
import {User} from "../interfaces/user";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../services/user.service";
import {CommentService} from "../services/comment.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comments: Comment[];
  user: User;
  username: string;
  apikey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private commentService: CommentService,
  ) { }

  ngOnInit(): void {
    this.getUser();
    this.getComments();
  }

  getUser():void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.apikey = 'eGF2aWNhbXBvczk5eGF2aWNhbXBvczk5QGdtYWlsLmNvbTE=';
    this.userService.getUserProfile(this.username)
      .subscribe(user => this.user = user);
  }

  getComments():void {
    let params = new HttpParams();
    this.commentService.getAllComments(params).subscribe(comments => this.comments = comments);
  }

}
