import { Component, OnInit } from '@angular/core';
// import { GameRegistrationService } from '../services/game-registration.service';
import { VideoGameRegister } from '../model/gameRegister';
import { Videogame } from '../model/game.model';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';



@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.scss']
})

export class GameRegisterComponent implements OnInit  {
  videoGame: VideoGameRegister;

  constructor(private router: Router, private authService: AuthService){}

  user: User;
  userSubscription: Subscription;

  ngOnInit() {
    throw new Error('Method not implemented.');
    this.userSubscription = this.authService.$currentUser.subscribe( (user: User) => {
      this.user = user;
    });
    if (!this.user) {
      this.router.navigateByUrl('/login');
    }
  }


// constructor(
//   private registerGame: GameRegistrationService,
// );

// ngOnInit() {
}

