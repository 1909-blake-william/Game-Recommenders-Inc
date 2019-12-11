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

<<<<<<< HEAD
  videoGame = {
        userId: 0,
        slug: '',
        name: '',
        videoGameName: '',
        platform: '',
        likeDislike: '',
  };
  constructor(private router: Router, private authService: AuthService, private regServ : GameRegistrationService){}
=======
  videoGame: VideoGameRegister;
  constructor(private router: Router, private authService: AuthService, private regServ: GameRegistrationService){}
>>>>>>> 0c42df526673c82312404bd9c751087c57c17996

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

