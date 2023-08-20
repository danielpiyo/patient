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
  originalNurses: Nurse[] = [];
  filteredNurses: Nurse[] = [];

  presenation: string = 'nurses-general';

  constructor(
    private _nurseService: NurseService,
    private _activatedRoute: ActivatedRoute
  ) {
    const serviceId = this._activatedRoute.snapshot.params['nurseId'];
    this.nursesLists = this._nurseService.getAllNurses();
    this.nursesLists.subscribe((nurses) => {
      this.originalNurses = nurses; // Initialize the original list
      this.filteredNurses = nurses; // Initialize the filtered list
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.nursesLists = this._nurseService.getAllNurses();
      this.nursesLists.subscribe((nurses) => {
        this.originalNurses = nurses; // Initialize the original list
        this.filteredNurses = nurses; // Initialize the filtered list
      });
    }, 4000);
  }

  sectionGeneral() {
    this.presenation = 'nurses-general';
  }

  sectionSpecialist() {
    this.presenation = 'nurses-specialist';
  }

  applyFilter(e: Event) {
    const target = e.target as HTMLInputElement;
    const filterValue = target.value.trim().toLowerCase();

    if (filterValue === '') {
      this.filteredNurses = this.originalNurses; // Restore the original list when filter is empty
    } else {
      this.filteredNurses = this.originalNurses.filter(
        (nurse) =>
          nurse.name.toLowerCase().includes(filterValue) ||
          nurse.speciality.toLowerCase().includes(filterValue) // Adjust the property to filter by
      );
    }
  }
}
