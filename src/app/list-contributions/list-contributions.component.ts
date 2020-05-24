import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContributionService} from "../services/contribution.service";

@Component({
  selector: 'app-list-contributions',
  templateUrl: './list-contributions.component.html',
  styleUrls: ['./list-contributions.component.css']
})
export class ListContributionsComponent implements OnInit {
  @Input() filter: String;

  constructor(
    private route: ActivatedRoute,
    private contributionService: ContributionService
  ) { }

  ngOnInit(): void {
  }

}
