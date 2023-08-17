import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [false],
    });
  }

  login() {
    if (this.loginForm.valid) {
      // Here, you can add your authentication logic.
      // For this example, let's simulate a successful login for demonstration purposes.
      if (
        this.loginForm.value.email === 'user@example.com' &&
        this.loginForm.value.password === 'password'
      ) {
        // Redirect to another page after successful login.
        this.router.navigateByUrl('/patient');
      } else {
        console.log('Invalid credentials');
      }
    }
  }
}
