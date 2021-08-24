import { Component } from '@angular/core';
import { AuthenticationGuardService } from './services/authentication-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mabena-LI-CapStoneProject-FrontEnd';

  constructor(private _authentication: AuthenticationGuardService)
  {
    
  }
  loginStatus()
  {
    if(this._authentication.isLoggedIn())
    {
      return true;
    }
    return false;
  }

  logout()
  {
    this._authentication.logOut();
  }
}
