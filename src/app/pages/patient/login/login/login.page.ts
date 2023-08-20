import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginPayload, LoginResponse } from '../../shared-resources/types/type';
import { LoginService } from '../../shared-resources/services/login/login.service';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
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
    public modalController: ModalController
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
        this.loading = false;
        this.responseData = response;
        localStorage.setItem(
          'currentUser',
          JSON.stringify(this.responseData.user)
        );
        localStorage.setItem(
          'currentToken',
          JSON.stringify(this.responseData.token)
        );
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
        this.loading = false;
        console.log(error);
      }
    );
  }

  public loghasError = (controlName: string, errorName: string) => {
    // this.loading = false;
    return this.loginForm.controls[controlName].hasError(errorName);
  };

  // closeModal() {
  //   this.modalController.dismiss();
  // }
  closeModal() {
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/patient';
    this.modalController
      .dismiss()
      .then(() => {
        setTimeout(() => {
          this._router.navigate(['/patient']); // Navigate to the returnUrl after dismissing the modal
        }, 100); // Adjust the delay as needed
      })
      .catch((error) => {
        // Handle error if the modal cannot be dismissed
        console.error('Error dismissing modal:', error);
      });
  }

  async openSignUPModal() {
    // this.closeModal();
    this.signupModal = await this.modalController.create({
      component: SignupPage,
    });
    return await this.signupModal.present();
  }
}
