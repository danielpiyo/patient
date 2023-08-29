import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../shared-resources/services/signup/signup.service';
import { SignupPayload } from '../../shared-resources/types/type';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _signUpService: SignupService,
    public modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  signUp() {
    if (this.signUpForm.valid) {
      const signUpPayload: SignupPayload = {
        email: this.signUpForm.value.email,
      };
      this._signUpService.signUp(signUpPayload).subscribe(
        (res) => {
          this.presentSuccessAlert();
          console.log(res);
          this.router.navigate(['/signup/onboard']);
          this.closeModal();
        },
        (error) => {
          console.log(error.error);
          this.presentErrorAlert(error);
        }
      );
    }
  }

  async closeModal() {
    const openModal = await this.modalController.getTop(); // Get the top-most open modal

    if (openModal) {
      this.modalController.dismiss();
    } else {
      this.router.navigate(['/patient']);
      // Do something else when there is no open modal
      console.log('No open modal found. Doing something else...');
    }
  }

  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Successfully Signed Up!',
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

  async openLoginModal() {
    const openModal = await this.modalController.getTop(); // Get the top-most open modal
    if (openModal) {
      this.modalController.dismiss();
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}
