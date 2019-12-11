import { Component, OnInit } from '@angular/core';
// import { GameRegistrationService } from '../services/game-registration.service';
import { VideoGameRegister } from '../model/gameRegister';
import { Videogame } from '../model/game.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { GameRegistrationService } from '../services/game-registration.service';

@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.scss']
})

export class GameRegisterComponent implements OnInit {

  videoGame = {
    userName: '',
    name: '',
    platform: 0,
    likeDislike: 1,
  };
  constructor(private router: Router, private authService: AuthService, private regServ: GameRegistrationService) { }


  user: User;
  userSubscription: Subscription;

  ngOnInit() {
    this.userSubscription = this.authService.$currentUser.subscribe((user: User) => {
      this.user = user;
    });
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
    this.videoGame.userName = this.user.username;
  }

  RegisterGame() {
    console.log(this.videoGame);
    this.regServ.RegisterGame(this.videoGame);
  }

  like() {
    this.videoGame.likeDislike = 5;
  }
  dislike() {
    this.videoGame.likeDislike = 6;
  }
}

