import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  user: User;
  userSubscription: Subscription;

  ngOnInit() {
    this.userSubscription = this.authService.$currentUser.subscribe( (user: User) => {
      this.user = user;
    });
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }

  go2register() {
    this.router.navigateByUrl('/regist');
  }

  go2owned() {
    this.router.navigateByUrl('/owned');
  }

  go2liked() {
    this.router.navigateByUrl('/liked');
  }

  go2recommended() {
    this.router.navigateByUrl('/recom');
  }

  go2chart() {
    this.router.navigateByUrl('/chart');
  }

}
