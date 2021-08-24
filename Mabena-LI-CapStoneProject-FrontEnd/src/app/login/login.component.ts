import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConnectionService } from '../http-connection.service';
import { User } from '../models/user';
import { UserLogin } from '../models/user-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersList: Array<User> = [];
  userLogin: UserLogin = new UserLogin();

  constructor(private _HttpConnectionService: HttpConnectionService, private _Router:Router) { }

  ngOnInit(): void {
  }

  Login() {
    if (this.UserLoggedIn()) {
      alert('You are successfully logged in,');
      
      localStorage.setItem('isLoggedIn', "true")
      return;
    } else {
      alert("Login failed, please try again")
    }
  }
  UserLoggedIn():boolean {
    this._HttpConnectionService.getAllUsers().subscribe((result) => {

      this.usersList = result;
      console.log("Users is "+result);
    }, (error) => {
      alert("Error found, it is " + error);
    });


    for (var UserF of this.usersList) {
      if ((this.userLogin.username == UserF.username) && (this.userLogin.password == UserF.password)) {
        console.log("User is found");
        return true;
      }
    }
    console.log("Not found");
    return false;
  }
}

