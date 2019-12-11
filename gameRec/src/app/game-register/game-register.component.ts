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

export class GameRegisterComponent implements OnInit  {

  videoGame: VideoGameRegister;
  constructor(private router: Router, private authService: AuthService, private regServ: GameRegistrationService){}

  user: User;
  userSubscription: Subscription;

  ngOnInit() {
    this.userSubscription = this.authService.$currentUser.subscribe( (user: User) => {
      this.user = user;
    });
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
    throw new Error('Method not implemented.');
  }

  RegisterGame() {
    this.regServ.RegisterGame(this.videoGame);
  }
}

