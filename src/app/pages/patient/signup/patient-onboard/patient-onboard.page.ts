import { Component, OnInit } from '@angular/core';
import { SignupService } from '../../shared-resources/services/signup/signup.service';
import { Observable } from 'rxjs';
import {
  Locations,
  LoginResponse,
  OnboardPayload,
} from '../../shared-resources/types/type';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationsService } from '../../shared-resources/services/locations/locations.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-patient-onboard',
  templateUrl: './patient-onboard.page.html',
  styleUrls: ['./patient-onboard.page.scss'],
})
export class PatientOnboardPage implements OnInit {
  patientFormGroup!: FormGroup;
  locationsList!: Observable<Locations[]>;
  responseData!: LoginResponse;

  constructor(
    private onboardService: SignupService,
    private formBuilder: FormBuilder,
    private _locationService: LocationsService,
    private route: ActivatedRoute,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.getLocations();
    this.initForm();
  }

  initForm() {
    this.patientFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      mobile: ['', Validators.required],
      address: ['', Validators.required],
      location_id: ['', Validators.required],
    });
  }

  onBoardPatient() {
    if (
      this.patientFormGroup.valid &&
      this.patientFormGroup.value.confirmPassword ===
        this.patientFormGroup.value.password
    ) {
      const patientDetails: OnboardPayload = {
        name: this.patientFormGroup.get('name')!.value,
        email: this.patientFormGroup.get('email')!.value,
        password: this.patientFormGroup.get('password')!.value,
        mobile: this.patientFormGroup.get('mobile')!.value,
        address: this.patientFormGroup.get('address')!.value,
        location_id: this.patientFormGroup.get('location_id')!.value,
      };
      console.log(this.patientFormGroup);
      this.onboardService.onBoard(patientDetails).subscribe(
        (response: any) => {
          // console.log(response);
          this.presentSuccessAlert();
          this.responseData = response;
          localStorage.setItem(
            'currentUser',
            JSON.stringify(this.responseData.user)
          );
          localStorage.setItem(
            'currentToken',
            JSON.stringify(this.responseData.token)
          );
          // this._router.navigate(['/patient']);
          const returnUrl =
            this.route.snapshot.queryParams['returnUrl'] || '/patient';
          this.router.navigateByUrl(returnUrl);
        },
        (error) => {
          this.presentErrorAlert(error.error);
        }
      );
    }
  }

  getLocations() {
    this.locationsList = this._locationService.getLocations();
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Data update succesfully!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentErrorAlert(error: Error) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: `Error: ${error.message}`,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
