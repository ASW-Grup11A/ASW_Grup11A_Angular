import { Component, OnInit } from '@angular/core';
import {Comment} from "../interfaces/comment";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {CommentService} from "../services/comment.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  comments: Comment[];
  username: string;
  apikey;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: CommentService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments():void {
    this.username = this.route.snapshot.paramMap.get('username');
    this.apikey = 'eGF2aWNhbXBvczk5eGF2aWNhbXBvczk5QGdtYWlsLmNvbTE=';
    let params = new HttpParams();
    params = params.append('username', this.username);
    this.commentService.getAllComments(params).subscribe(comments => this.comments = comments);
  }
}
