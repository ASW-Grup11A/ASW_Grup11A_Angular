import {Component, Input, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../services/user.service";
import {ApiKeyManagerService} from "../services/api-key-manager.service";

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
    private userService: UserService,
    private apiKeyManagerService: ApiKeyManagerService,
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.userService.getUserProfile(this.apiKeyManagerService.username)
      .subscribe(user => this.user=user);
  }

  public changeHighlight(highlight: string): void {
    this.highlight = highlight;
  }

}
