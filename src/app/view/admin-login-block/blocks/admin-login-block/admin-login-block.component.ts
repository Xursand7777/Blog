import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login-block',
  templateUrl: './admin-login-block.component.html',
  styleUrls: ['./admin-login-block.component.css']
})
export class AdminLoginBlockComponent implements OnInit {

  serverError = '';

  constructor() { }

  ngOnInit(): void {
  }

  onLogin(value: string) {
    this.serverError += 'F';
    console.log('OnLogin', value)
  }
}
