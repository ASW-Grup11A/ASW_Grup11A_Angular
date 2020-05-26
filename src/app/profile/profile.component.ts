import {Component, Input, OnInit} from '@angular/core';
import { User } from "../interfaces/user";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../services/user.service";
import {HttpParams} from "@angular/common/http";
import { Location } from "@angular/common"

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;
  apikey: string;
  email: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private location: Location
  ) {
  }

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

  goBack(): void {
    this.location.back();
  }

  updateUserProfile() {
    const params = new HttpParams();
    params.append('about', this.user.about);
    params.append('showdead', this.user.showdead.toString());
    params.append('noprocrast', this.user.noprocrast.toString());
    params.append('maxvisit', this.user.maxvisit.toString());
    params.append('minaway', this.user.minaway.toString());
    params.append('delay', this.user.delay.toString());
    console.log(params)
    this.userService.updateUserProfile(params).subscribe(user => this.user = user);
  }
}
