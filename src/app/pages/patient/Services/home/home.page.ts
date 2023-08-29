import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Mclservices, User } from '../../shared-resources/types/type';
import { ModalController, NavController, NavParams } from '@ionic/angular';
import { MclinicservicesService } from '../../shared-resources/services/mclinic-service/mclinicservices.service';
import { Router } from '@angular/router';
import { LoginPage } from '../../login/login/login.page';
import { SignupPage } from '../../signup/signup/signup.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams],
})
export class HomePage {
  serviceList!: Observable<Mclservices[]>;
  currentUser: User;
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
      console.log('ServicenLogs', this.serviceList);
    }, 6000);
  }

  goToServiceDetail(serviceId: any) {
    this.router.navigate(['/patient/service', serviceId]);
  }

  async openLoginModal() {
    const modalInstance = await this.modalContoller.create({
      component: LoginPage,
    });
    return await modalInstance.present();
  }

  async openSignUPModal() {
    const modalInstance = await this.modalContoller.create({
      component: SignupPage,
    });
    return await modalInstance.present();
  }
}
