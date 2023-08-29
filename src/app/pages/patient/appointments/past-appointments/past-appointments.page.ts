import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AppointmentService } from '../../shared-resources/services/appointment/appointment.service';
import {
  BookedAppointments,
  UserToken,
} from '../../shared-resources/types/type';

@Component({
  selector: 'app-past-appointments',
  templateUrl: './past-appointments.page.html',
  styleUrls: ['./past-appointments.page.scss'],
})
export class PastAppointmentsPage implements OnInit {
  appointmentLists!: Observable<BookedAppointments[]>;
  originalAppointment: BookedAppointments[] = [];
  filteredAppointment: BookedAppointments[] = [];

  userToken: any;

  presenation: string = 'nurses-general';

  constructor(
    private _appointmentService: AppointmentService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.userToken = JSON.parse(localStorage.getItem('currentToken') || '{}');
    console.log(localStorage.getItem('currentToken'));
    const serviceId = this._activatedRoute.snapshot.params['nurseId'];
    this.appointmentLists = this._appointmentService.getAllAppointments(
      this.userToken
    );
    this.appointmentLists.subscribe((appointment: any) => {
      this.originalAppointment = appointment; // Initialize the original list
      this.filteredAppointment = appointment; // Initialize the filtered list
    });
  }

  ngOnInit() {
    setTimeout(() => {
      this.appointmentLists = this._appointmentService.getAllAppointments(
        this.userToken
      );
      this.appointmentLists.subscribe((appointment: any) => {
        this.originalAppointment = appointment; // Initialize the original list
        this.filteredAppointment = appointment; // Initialize the filtered list
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
      this.filteredAppointment = this.originalAppointment; // Restore the original list when filter is empty
    } else {
      this.filteredAppointment = this.originalAppointment.filter(
        (appointment) =>
          appointment.service_name.toLowerCase().includes(filterValue) ||
          appointment.doctor_name.toLowerCase().includes(filterValue) // Adjust the property to filter by
      );
    }
  }
}
