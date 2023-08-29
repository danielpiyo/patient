import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from '../../../patient/shared-resources/services/appointment/appointment.service';
import { MclinicservicesService } from '../../shared-resources/services/mclinic-service/mclinicservices.service';
import { Observable } from 'rxjs';
import {
  Appointment,
  Mclservices,
  User,
} from '../../shared-resources/types/type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { SignupPage } from '../../signup/signup/signup.page';
import { NewpaymentPage } from '../../payment/newpayment/newpayment.page';

@Component({
  selector: 'app-new-appointments',
  templateUrl: './new-appointments.page.html',
  styleUrls: ['./new-appointments.page.scss'],
  providers: [NavParams],
})
export class NewAppointmentsPage implements OnInit {
  allServices!: Observable<Mclservices[]>;
  selectedServiceId!: number;
  appointmentForm!: FormGroup;
  newAppointmemt!: Appointment;
  currentUser!: User;
  nurseId!: number;
  modelData: any;
  serviceName: any;
  coordinates: any;

  constructor(
    private _route: ActivatedRoute,
    private _allServices: MclinicservicesService,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _appointmentService: AppointmentService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private router: Router,
    public modalController: ModalController
  ) {
    this.nurseId = this._route.snapshot.params['nurseId'];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
  }

  ngOnInit() {
    this.printCurrentPosition;
    this.getAllServices();
    this.formInit();
  }

  formInit() {
    this.appointmentForm = this.formBuilder.group({
      service_id: ['', Validators.required],
      appointment_date: ['', Validators.required],
      appointment_notes: ['', Validators.required],
      appointment_for: ['', Validators.required],
      chronic_yn: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  // get Location
  printCurrentPosition = async () => {
    this.coordinates = (await Geolocation.getCurrentPosition()).coords;
    console.log('Current position:', this.coordinates.coords);
  };

  // get services
  getAllServices() {
    this.allServices = this._allServices.getAllServices();
     this.printCurrentPosition().catch((error) => {
      console.error('Error getting current position:', error);
    });
  }

  // make payment
  proceedToPay() {}

  onServiceChange(event: Event) {
    const selectedServiceId = (event.target as HTMLIonSelectElement).value;
    this.allServices.subscribe((allServices) => {
      const selectedService = allServices.find(
        (service) => service.id === selectedServiceId
      );
      if (selectedService) {
        this.serviceName = selectedService.name;
      }
    });
  }

  // submit appointment
  submit() {
    this.printCurrentPosition().catch((error) => {
      console.error('Error getting current position:', error);
    });
    const appointmentData = this.appointmentForm.value;
    const appointmentPayload: Appointment = {
      service_id: appointmentData.service_id,
      service_name: this.serviceName,
      doctor_id: this.nurseId,
      site: appointmentData.site,
      location: this.coordinates,
      mobile: this.currentUser.mobile,
      appointment_for: appointmentData.appointment_for,
      age: appointmentData.age,
      booking_date: appointmentData.appointment_date,
      time_serial: appointmentData.time_serial,
      payment_status: 'Pending',
      trx_code: 'Waiting',
      is_complete: false,
      disease: appointmentData.appointment_notes,
      chronic_yn: appointmentData.chronic_yn,
    };

    console.log(appointmentPayload);
    this.openPaymentModal(appointmentPayload);
  }

  cancel() {
    this._router.navigate(['/patient/service']);
  }

  async openPaymentModal(data: Appointment) {
    const modal = await this.modalController.create({
      component: NewpaymentPage,
      componentProps: {
        data: data,
      },
    });
    modal.onDidDismiss().then((modelData) => {
      if (modelData !== null) {
        this.modelData = modelData.data;
        console.log('Modal Data : ' + modelData.data);
      }
    });
    return await modal.present();
  }
}
