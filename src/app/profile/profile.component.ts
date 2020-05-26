import { Component, OnInit } from '@angular/core';
import { User } from "../interfaces/user";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  apikey: string;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    const username = this.route.snapshot.paramMap.get('username');
    this.apikey = 'eGF2aWNhbXBvczk5eGF2aWNhbXBvczk5QGdtYWlsLmNvbTE=';
    this.userService.getUserProfile(username)
      .subscribe(user => this.user = user);
    this.email = 'xavicampos99@gmail.com'
  }
}
