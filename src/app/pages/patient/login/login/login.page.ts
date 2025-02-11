import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPayload, LoginResponse } from '../../shared-resources/types/type';
import { LoginService } from '../../shared-resources/services/login/login.service';
import { Observable } from 'rxjs';
import { AlertController, ModalController } from '@ionic/angular';
import { SignupPage } from '../../signup/signup/signup.page';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  returnUrl!: string; // Store the returnUrl parameter
  loginForm!: FormGroup;
  loading: boolean = false;
  responseData!: LoginResponse;
  formSubmited: boolean = false;
  signupModal!: HTMLIonModalElement;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private route: ActivatedRoute,
    private loginService: LoginService,
    public modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('[^@]*@[^@]*'),
        ],
      ],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }

  login() {
    this.formSubmited = true;
    const loginFormData = this.loginForm.value;
    const loginPayload: LoginPayload = {
      email: loginFormData.email,
      password: loginFormData.password,
    };
    console.log(loginPayload);
    this.loading = true;
    this.loginService.logIn(loginPayload).subscribe(
      (response: any) => {
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
        localStorage.setItem('LoggedIn', 'Yes');
        const returnUrl =
          this.route.snapshot.queryParams['returnUrl'] || '/patient';
        this._router.navigateByUrl(returnUrl);
        // this._router.navigate(['/patient']);
        if (this.signupModal) {
          this.signupModal.dismiss();
        }
        this.closeModal();
      },
      (error) => {
        this.presentErrorAlert(error.error);
        console.log(error);
      }
    );
  }

  public loghasError = (controlName: string, errorName: string) => {
    // this.loading = false;
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  async closeModal() {
    const openModal = await this.modalController.getTop(); // Get the top-most open modal

    if (openModal) {
      this.modalController.dismiss();
    } else {
      this._router.navigate(['/patient']);
    }
  }
  async presentSuccessAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'successfully Logged In!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async presentErrorAlert(error: Error) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: `${error.message}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

  async openSignUPModal() {
    const openModal = await this.modalController.getTop(); // Get the top-most open modal
    if (openModal) {
      this.modalController.dismiss();
      this._router.navigate(['/signup']);
    } else {
      this._router.navigate(['/signup']);
    }
  }
}
