import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private currentUserStream = new ReplaySubject<User>(1);
  $currentUser = this.currentUserStream.asObservable();

  constructor(private httpClient: HttpClient, private router: Router) {}

  
}
