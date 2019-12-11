import { Injectable } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Videogame } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private userLibraryStream = new ReplaySubject<Videogame>();
  $userLibrary = this.userLibraryStream.asObservable();

  constructor(private httpClient: HttpClient, private authService: AuthService) {}
  videoGame: Videogame;
  user: User;
  userSubscription: Subscription;

  getLibrary(credentials: User) { // please fix this
    this.httpClient.get<Videogame[]>('http://localhost:8080/GameRecommender/library?', credentials).subscribe( //
      data => { // if successful / 200's is returned
        console.log(data);
        console.log('logged in'); // prints error, not required
        if (data) {
        for (const r of data) {
          
        }
      }
    },
      err => { // if successful / 400's is returned
        console.log(err); // prints error, not required
      }
    );
  }

}
