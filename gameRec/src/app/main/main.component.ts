import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private httpClient: HttpClient, private authService: AuthService) { }

  user: User;
  userSubscription: Subscription;

  ngOnInit() {
    this.userSubscription = this.authService.$currentUser.subscribe( (user: User) => {
      this.user = user;
    });
  }

  go2register() {
    this.router.navigateByUrl('/regist');
  }

  go2owned() {
    this.router.navigateByUrl('/recom');
  }

  go2liked() {
    this.router.navigateByUrl('/owned');
  }

  go2recommended() {
    this.router.navigateByUrl('/liked');
  }

}
