import { Component, OnInit } from '@angular/core';
import {User} from "../interfaces/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  highlight: string = "";
  userSelected: string;
  user: User;
  submitted_id: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('filter')) {
      this.highlight = this.route.snapshot.paramMap.get('filter');
    }
    this.userSelected = this.route.snapshot.paramMap.get('userSelected');
    this.userSelected = "HOLLALLALALLA";
    console.log(`Highlight: ${this.highlight}`);
  }

  public changeHighlight(highlight: string): void {
    this.highlight = highlight;
  }

  public getHighlight() {
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    console.log(`Highlight: ${this.highlight}`);
    return this.highlight;
  }

}
