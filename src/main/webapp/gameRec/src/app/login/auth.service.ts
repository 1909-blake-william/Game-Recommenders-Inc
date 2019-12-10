import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // not so sure whats going on in here.

  private currentUserStream = new ReplaySubject<User>(1);
  $currentUser = this.currentUserStream.asObservable();

  private loginErrorStream = new Subject<string>();
  $loginError = this.loginErrorStream.asObservable();


  constructor(private httpClient: HttpClient, private router: Router) {
    this.httpClient.get<User>('http://localhost:8080/gri/session-user', {
      withCredentials: true
    }).subscribe(
      data => {
        console.log('logged in');
        this.currentUserStream.next(data); // transitions to next screen if already logged in
      },
      err => {
        console.log('not currently logged in'); // prints to console if not
      }
    );
  }

  login(credentials: any) { //
    this.httpClient.post<User>('http://localhost:8080/gri/login', credentials, {
      withCredentials: true // processes only if cedentials are filled ?
    }).subscribe( //
      data => { // if successful / 200's is returned
        console.log('logged in'); // prints error, not required
        this.router.navigateByUrl('/main'); // the link to the next location
        this.currentUserStream.next(data); // sends user data to next location
      },
      err => { // if successful / 400's is returned
        console.log(err); // prints error, not required
        this.loginErrorStream.next('Login Failed'); // sets error message?
      }
    );
  }
}
