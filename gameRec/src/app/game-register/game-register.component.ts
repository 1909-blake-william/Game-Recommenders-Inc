import { Component, OnInit } from '@angular/core';
// import { GameRegistrationService } from '../services/game-registration.service';
import { VideoGameRegister } from '../model/gameRegister';
import { gameRegistrationService} from 'src/app/services/game-registration.service'



@Component({
  selector: 'app-game-register',
  templateUrl: './game-register.component.html',
  styleUrls: ['./game-register.component.scss']
})

export class GameRegisterComponent implements OnInit {
  videoGame: VideoGameRegister;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

// 
// constructor(
//   private registerGame: GameRegistrationService,
// );

// ngOnInit() {
}

