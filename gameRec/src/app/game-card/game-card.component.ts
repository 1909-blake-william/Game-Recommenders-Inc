import { Component, OnInit, Input } from '@angular/core';
import { Videogame } from '../model/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input()
  videogame: Videogame;

  constructor() { }

  ngOnInit() {
  }

}
