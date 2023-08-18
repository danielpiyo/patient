import { Component } from '@angular/core';
import { User } from '../shared-resources/types/type';

@Component({
  selector: 'app-tabs',
  templateUrl: 'patient.page.html',
  styleUrls: ['patient.page.scss'],
})
export class PatientPage {
  loggedIn: boolean = false;
  constructor() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn = true;
    }
  }
}
