import {Component, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {UserService} from "../services/user.service";
import {UtilitiesService} from "../services/utilities.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  private getUser() {
    console.log("I'm gonna get a user");
    this.userService.getUserProfile('sgmarcsg').subscribe(user => this.user = user);
    console.log("I got a response");
  }

  private updateAbout() {
    let parameters: Map<string, any> = new Map<string, any>();
    parameters.set("about", "Baixo cada dia");
    this.userService.updateUserProfile(UtilitiesService.convertToHttpParams(parameters));
  }
}
