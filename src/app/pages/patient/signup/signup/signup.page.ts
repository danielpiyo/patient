import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupService } from '../../shared-resources/services/signup/signup.service';
import { SignupPayload } from '../../shared-resources/types/type';
import { ModalController } from '@ionic/angular';
import { LoginPage } from '../../login/login/login.page';

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
    public modalController: ModalController
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
          console.log(res);
          this.router.navigate(['/signup/onboard']);
          this.closeModal();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }

  closeModal() {
    this.modalController.dismiss();
  }

  async openLoginModal() {
    // this.closeModal();
    const modalInstance = await this.modalController.create({
      component: LoginPage,
    });
    return await modalInstance.present();
  }
}
