import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../interfaces/contribution';
import {ActivatedRoute, Router} from '@angular/router';
import {ContributionService} from '../services/contribution.service';
import {CommentService} from '../services/comment.service';
import {Comment} from '../interfaces/comment';
import {HttpParams} from '@angular/common/http';
import {ContributionImpl} from '../models/contribution-impl';
import {CommentImpl} from '../models/comment-impl';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';
import {UtilitiesService} from '../services/utilities.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  id: string;
  user: string;
  contribution: Contribution;
  comment: Comment;
  comments: Comment[];
  @Input() newComment: Comment;
  form;
  indent: number;

  constructor(
    private route: ActivatedRoute,
    private contributionService: ContributionService,
    private commentService: CommentService,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.form = formBuilder.group( {
      parent: '',
      text: ''
      });
  }

  ngOnInit(): void {
    this.user = this.userService.CurrentUser;
    this.contribution = new ContributionImpl(null, null, null);
    this.comment = new CommentImpl(null);
    this.getContribution();
    this.getComments();
  }

  private getContribution(): void {
    this.route.queryParamMap.subscribe( params => this.id =  params.get('id'));
    this.commentService.getComment(this.id).subscribe(comment => {
      this.comment = comment;
    }, error => {
      if (error === 404) {
        this.contributionService.getContribution(this.id).subscribe(contrib => {
          this.contribution = contrib;
          console.log(this.contribution);
        });
      }
    });
  }

  private getComments(): void {
    this.indent = 0;
    this.commentService.getAllCommentsFromContribution(this.id, new HttpParams())
      .subscribe(comments => {
        this.comments = comments;
      });
  }

  upVoteContribution(id: number) {
    console.log('Upvote', id);
  }

  unvoteContribution(id: number) {
    console.log('Unvote', id);
  }

  unhideContribution(id: number) {
    console.log('Unhide', id);
  }

  hideContribution(id: number) {
    console.log('Hide', id);
  }

  onClick(params: { text: string }) {
    this.form.reset();
    this.commentService.createComment(this.id, {text: params.text}).subscribe();
    this.getComments();
    //this.router.navigate(['item'], {queryParams: {id: this.id}});
  }

  searchInGoogle(title: string) {
    UtilitiesService.googleSearch(title);
  }

  onCollapse(id: number) {

  }
}
