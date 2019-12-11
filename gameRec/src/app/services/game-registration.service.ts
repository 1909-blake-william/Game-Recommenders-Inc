import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { VideoGameRegister } from '../model/gameRegister';


import { ApiResponse } from '../model/ApiResponse.model';
import { Videogame } from '../model/game.model';
import { SlugConvertorPipe } from '../custom pipe/slug-converter';

@Injectable({
  providedIn: 'root'
})
export class GameRegistrationService {
  private appUri: 'http://localhost:8080/GameRecommender/login'
  videoGame: Videogame;
  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<ApiResponse[]>(`https://api.rawg.io/api/games?name=${VideoGameRegister.slug}`, {
      withCredentials: true
    }).subscribe(
      data => {
        if (data) {
          for (const r of data) {
            if (r && r.id) {
              this.videoGame.id = r.id;
            }
            if (r && r.genre && r.genre.length) {
              this.videoGame.genreid = r.genre[0].id;
              this.videoGame.genrename = r.genre[0].name;
            }
          }
          console.log(data);
        }
        const body = JSON.stringify(this.videoGame);
        this.httpClient.post<Videogame>(this.appUri, body).subscribe(
          (val) => {
            console.log('POST was succesful in adding a record', val);
          },
          response => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          }
      }
    } err => {
  console.error(err.error);
}
  // let r;
  // this.result = data;
  // for (r of this.result) {
  //     if (r && r.id) {
  //         this.videoGame.id = r.id;
  //     }
  //     if (r && r.name) {
  //         this.videoGame.name = r.name;
  //     }
  //     if (r && r.id) {
  //         this.videoGame.id = r.id;
  //     }
  //     if (r && r.id) {
  //         this.videoGame.id = r.id;
  //     }

  // }
  // this.videoGame.name = data.name;

  // this.httpClient.post<data>('http://localhost:8080/GameRecommender/gri/register-game')

