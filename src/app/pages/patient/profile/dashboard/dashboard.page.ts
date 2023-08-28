import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, NavParams, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoginPage } from '../../login/login/login.page';
import { MclinicservicesService } from '../../shared-resources/services/mclinic-service/mclinicservices.service';
import { Mclservices, User } from '../../shared-resources/types/type';
import { SignupPage } from '../../signup/signup/signup.page';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [NavParams],
})
export class DashboardPage implements OnInit {
  serviceList!: Observable<Mclservices[]>;
  currentUser!: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private router: Router,
    private allServices: MclinicservicesService,
    public modalContoller: ModalController
  ) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    setTimeout(() => {
      this.serviceList = this.allServices.getAllServices();
    }, 6000);
  }
  ngOnInit(): void {}
  goToServiceDetail(serviceId: any) {
    this.router.navigate(['/patient/service', serviceId]);
  }

  // async openLoginModal() {
  //   const modalInstance = await this.modalContoller.create({
  //     component: LoginPage,
  //   });
  //   return await modalInstance.present();
  // }

  // async openSignUPModal() {
  //   const modalInstance = await this.modalContoller.create({
  //     component: SignupPage,
  //   });
  //   return await modalInstance.present();
  // }
}
