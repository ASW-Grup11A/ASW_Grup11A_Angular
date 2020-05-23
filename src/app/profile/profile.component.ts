import {Component, OnInit} from '@angular/core';
import {User} from '../interfaces/user';
import {UserService} from '../services/user.service';
import {UtilitiesService} from '../services/utilities.service';

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
    const apiKey = UtilitiesService.createApiKey({username: 'albert.pinto', email: 'albert.mypetcare@gmail.com'});
    console.log(apiKey);
  }

  private getUser() {
    this.userService.getUser('Marc Simó').subscribe(user => this.user = user);
  }

  private updateAbout() {
    const parameters: Map<string, any> = new Map<string, any>();
    parameters.set('about', 'Baixo cada dia');
    this.userService.updateUser(this.user, parameters);
  }
}
