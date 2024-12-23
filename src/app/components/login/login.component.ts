import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(){}

  activeForm: string = 'Login';
  switchForm(formType: string): void {
    this.activeForm = formType;
  }


  ngOnInit(): void {}
}
