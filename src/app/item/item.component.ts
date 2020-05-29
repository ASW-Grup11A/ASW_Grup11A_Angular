import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../interfaces/contribution';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {ContributionService} from '../services/contribution.service';
import {CommentService} from '../services/comment.service';
import {Comment} from '../interfaces/comment';
import {HttpParams} from '@angular/common/http';
import {ContributionImpl} from '../models/contribution-impl';
import {CommentImpl} from '../models/comment-impl';
import {UserService} from '../services/user.service';
import {FormBuilder} from '@angular/forms';
import {UtilitiesService} from '../services/utilities.service';
import {filter} from 'rxjs/operators';

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
  error = false;

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
    this.router.events.pipe(
      filter((event: RouterEvent) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.fetchData();
    });
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
        this.comments = comments.comments_list;
        console.log('hola', this.comments);
      });
  }

  upVoteContribution(id: number) {
    console.log('Upvote', id);
    this.contributionService.voteContribution(id.toString()).subscribe(() => this.ngOnInit());
  }

  unvoteContribution(id: number) {
    console.log('Unvote', id);
    this.contributionService.unvoteContribution(id.toString()).subscribe(() => this.ngOnInit());
  }

  unhideContribution(id: number) {
    console.log('Unhide', id);
    this.contributionService.unhideContribution(id.toString()).subscribe(() => this.ngOnInit());
  }

  hideContribution(id: number) {
    console.log('Hide', id);
    this.contributionService.hideContribution(id.toString()).subscribe(() => this.ngOnInit());
  }

  onClick(params: { text: string }) {
    if (params.text === '') {
      this.error = true;
      this.ngOnInit();
    } else {
      // this.router.navigate(['addcomment'], {queryParams: {id: this.id}});
      this.form.reset();
      this.error = false;
      this.commentService.createComment(this.id, {text: params.text}).subscribe(() => this.ngOnInit());
      // this.router.navigate(['item'], {queryParams: {id: this.id}});
    }
  }

  searchInGoogle(title: string) {
    UtilitiesService.googleSearch(title);
  }

  onCollapse(id: number) {
    console.log('Collapse', id);
    this.ngOnInit();
  }

  goToItem(contributionId: number) {
    this.router.navigate(['item'], {queryParams: {id: contributionId.toString()}});
  }

  private fetchData() {
    this.user = this.userService.CurrentUser;
    this.contribution = new ContributionImpl(null, null, null);
    this.comment = new CommentImpl(null);
    this.getContribution();
    this.getComments();
  }
}
