import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-liked',
  templateUrl: './game-liked.component.html',
  styleUrls: ['./game-liked.component.scss']
})
export class GameLikedComponent implements OnInit {
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

}
