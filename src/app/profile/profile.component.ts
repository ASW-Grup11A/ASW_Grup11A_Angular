import {Component, OnInit} from '@angular/core';
import {User} from "../interfaces/user";
import {UserService} from "../services/user.service";

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
    this.updateAbout();
  }

  private getUser() {
    this.userService.getUser('Marc Simó').subscribe(user => this.user = user);
  }

  private updateAbout() {
    let parameters: Map<string, any> = new Map<string, any>();
    parameters.set("about", "Baixo cada dia");
    this.userService.updateUser(this.user, parameters);
  }
}
