import {Component, Input, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {HttpParams} from '@angular/common/http';
import {ApiKeyManagerService} from '../services/api-key-manager.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private apiKeyManager: ApiKeyManagerService
  ) {
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    const username = this.route.snapshot.paramMap.get('username');
    this.userService.getUserProfile(username)
      .subscribe(user => this.user = user);
  }

  updateUserProfile() {
    let params = new HttpParams();
    params = params.append('about', this.user.about);
    params = params.append('showdead', this.user.showdead.toString());
    params = params.append('noprocrast', this.user.noprocrast.toString());
    params = params.append('maxvisit', this.user.maxvisit.toString());
    params = params.append('minaway', this.user.minaway.toString());
    params = params.append('delay', this.user.delay.toString());
    this.userService.updateUserProfile(params).subscribe(user => this.user = user);
  }

  getApiKey() {
    return this.apiKeyManager.apiKey;
  }
}
