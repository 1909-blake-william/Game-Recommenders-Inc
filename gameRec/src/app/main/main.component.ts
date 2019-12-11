import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  go2register() {
    this.router.navigateByUrl('/regist');
  }

  go2owned() {
    this.router.navigateByUrl('/recom');
  }

  go2liked() {
    this.router.navigateByUrl('/owned');
  }

  go2recommended() {
    this.router.navigateByUrl('/liked');
  }

}
