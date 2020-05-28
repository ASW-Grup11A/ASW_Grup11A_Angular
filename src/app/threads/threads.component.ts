import { Component, OnInit } from '@angular/core';
import { Contribution} from "../interfaces/contribution";
import { Comment } from "../interfaces/comment";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { CommentService } from "../services/comment.service";
import { HttpParams } from "@angular/common/http";
import {UserService} from "../services/user.service";
import {User} from "../interfaces/user";

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
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
    params = params.append('username', this.username);
    this.commentService.getAllComments(params).subscribe(comments => this.comments = comments);
  }
}
