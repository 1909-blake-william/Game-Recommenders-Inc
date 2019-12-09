import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  credentials = {
    username: '',
    password: ''
  };

  errorMessage = '';
  errorMessageSubscription: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.errorMessageSubscription = this.authService.$loginError.subscribe(errorMessage => {
      this.errorMessage = errorMessage;
    });
  }

  login() {
    this.authService.login(this.credentials);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    this.errorMessageSubscription.unsubscribe();
  }
}
