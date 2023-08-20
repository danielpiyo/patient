import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nurses-speciality',
  templateUrl: './nurses-speciality.page.html',
  styleUrls: ['./nurses-speciality.page.scss'],
})
export class NursesSpecialityPage implements OnInit {
  constructor() {}

  items: string[] = [];

  ngOnInit() {
    for (let i = 1; i < 51; i++) {
      this.items.push(`Item : ${i}`);
    }
  }
}
