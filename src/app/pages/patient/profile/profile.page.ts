import { Component } from '@angular/core';
import { User } from '../shared-resources/types/type';
import { LoginService } from '../shared-resources/services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
})
export class ProfilePage {
  currentUser!: User;
  constructor(private _logOutServive: LoginService, private _router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  logOut() {
    this._logOutServive.logout();
    this._router.navigate(['/patient']);
  }
}
