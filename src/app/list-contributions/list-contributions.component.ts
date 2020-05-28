import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ContributionService} from "../services/contribution.service";

@Component({
  selector: 'app-list-contributions',
  templateUrl: './list-contributions.component.html',
  styleUrls: ['./list-contributions.component.css']
})
export class ListContributionsComponent implements OnInit {
  @Input() userSelected: String;
  highlight: String;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log("Start");
    console.log(this.route);
    console.log("End");
    this.userSelected = this.route.snapshot.paramMap.get('userSelected');
    this.userSelected = this.route.outlet;
    this.highlight= "newest";
  }

}
