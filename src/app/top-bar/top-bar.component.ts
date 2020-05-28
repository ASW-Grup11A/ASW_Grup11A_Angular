import {Component, Input, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  @Input() highlight: string = "";
  @Input() userSelected: string;
  @Input() user: User;
  @Input() submitted_id: string;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.userSelected = this.route.snapshot.paramMap.get('userSelected');
    this.userSelected = this.route.snapshot.url.join('-SEP-');
    console.log("Hola");
  }

  public changeHighlight(highlight: string): void {
    this.highlight = highlight;
  }

}
