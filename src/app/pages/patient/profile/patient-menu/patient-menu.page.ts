import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared-resources/services/login/login.service';

@Component({
  selector: 'app-patient-menu',
  templateUrl: './patient-menu.page.html',
  styleUrls: ['./patient-menu.page.scss'],
})
export class PatientMenuPage implements OnInit {
  constructor(private _logOutServive: LoginService, private _router: Router) {}

  ngOnInit() {}

  logOut() {
    this._logOutServive.logout();
    this._router.navigate(['/patient']);
  }
}
