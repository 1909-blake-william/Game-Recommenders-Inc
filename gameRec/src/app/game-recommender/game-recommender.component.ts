import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';

@Component({
  selector: 'app-game-recommender',
  templateUrl: './game-recommender.component.html',
  styleUrls: ['./game-recommender.component.scss']
})
export class GameRecommenderComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  user: User;
  userSubscription: Subscription;

  ngOnInit() {
    this.userSubscription = this.authService.$currentUser.subscribe((user: User) => {
      this.user = user;
    });
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }

  goHome() {
    this.router.navigateByUrl('/main');
  }

}
