import { Component, OnInit } from '@angular/core';
import { User } from '../shared-resources/types/type';

@Component({
  selector: 'app-tabs',
  templateUrl: 'patient.page.html',
  styleUrls: ['patient.page.scss'],
})
export class PatientPage implements OnInit {
  loggedIn: boolean = false;
  constructor() {
    if (localStorage.getItem('currentUser')) {
      this.loggedIn = true;
    }
  }

  ngOnInit() {
    setInterval(() => {
      if (localStorage.getItem('currentUser')) {
        this.loggedIn = true;
        // Perform other actions here if needed
      }
    }, 3000); //
  }
}
