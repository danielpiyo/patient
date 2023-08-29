import { Component, OnInit } from '@angular/core';
import { User } from '../../shared-resources/types/type';

@Component({
  selector: 'app-pastpayment',
  templateUrl: './pastpayment.page.html',
  styleUrls: ['./pastpayment.page.scss'],
})
export class PastpaymentPage implements OnInit {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  ngOnInit() {}
}
