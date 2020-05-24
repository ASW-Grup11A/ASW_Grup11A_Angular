import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  apikey: string;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.getUser()
  }

  private getUser() {
    //const username = this.route.snapshot.paramMap.get('username');
    const username = 'xavicampos99';
    this.apikey = 'eGF2aWNhbXBvczk5eGF2aWNhbXBvczk5QGdtYWlsLmNvbTE=';
    this.userService.getUserProfile(username).subscribe(user => this.user = user);
  }

  private updateAbout() {
    let params: HttpParams = new HttpParams();
    params = params.append('about', 'I love Minekraft');
    this.userService.updateUserProfile(params).subscribe(user => this.user = user);
  }
}
