import { Component, OnInit } from '@angular/core';
import { ClinicianService } from '../../shared-resources/services/clinicians-service/clinician.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Clinician } from '../../shared-resources/types/type';

@Component({
  selector: 'app-availableclinician',
  templateUrl: './availableclinician.page.html',
  styleUrls: ['./availableclinician.page.scss'],
})
export class AvailableclinicianPage implements OnInit {
  clinicianList!: Observable<Clinician[]>;

  constructor(
    private _clinicianService: ClinicianService,
    private _activateRoute: ActivatedRoute
  ) {
    const clinicianID = this._activateRoute.snapshot.params['clinicianId'];
    this.clinicianList = this._clinicianService.getClinicians();
  }

  ngOnInit() {}

  presenation: string = 'clician-general';
  sectionGeneral() {
    this.presenation = 'clician-general';
  }

  sectionSpecialist() {
    this.presenation = 'clician-specialist';
  }
}
