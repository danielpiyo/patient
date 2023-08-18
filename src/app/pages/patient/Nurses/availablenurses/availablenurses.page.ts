import { Component, OnInit } from '@angular/core';
import { NurseService } from '../../shared-resources/services/nurses-service/nurse.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Nurse } from '../../shared-resources/types/type';

@Component({
  selector: 'app-availablenurses',
  templateUrl: './availablenurses.page.html',
  styleUrls: ['./availablenurses.page.scss'],
})
export class AvailablenursesPage implements OnInit {
  nursesLists!: Observable<Nurse[]>;

  presenation: string = 'nurses-general';

  constructor(
    private _nurseService: NurseService,
    private _activatedRoute: ActivatedRoute
  ) {
    const serviceId = this._activatedRoute.snapshot.params['nurseId'];
    this.nursesLists = this._nurseService.getAllNurses();
  }

  ngOnInit() {
    setTimeout(() => {
      this.nursesLists = this._nurseService.getAllNurses();
    }, 4000);
  }

  sectionGeneral() {
    this.presenation = 'nurses-general';
  }

  sectionSpecialist() {
    this.presenation = 'nurses-specialist';
  }
}
