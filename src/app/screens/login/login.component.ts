import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  //VARIABLES
  hide = true;

  constructor(
    private router: Router,
  ){}

  //FUNCTIONS
  goTo(){
    this.router.navigate(['home']);
  }

}
