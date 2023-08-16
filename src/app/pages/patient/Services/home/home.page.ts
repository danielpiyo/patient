import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Mclservices } from '../../shared-resources/types/type';
import { NavController, NavParams } from '@ionic/angular';
import { MclinicservicesService } from '../../shared-resources/services/mclinic-service/mclinicservices.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [NavParams],
})
export class HomePage {
  serviceList!: Observable<Mclservices[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private allServices: MclinicservicesService
  ) {
    setTimeout(() => {
      this.serviceList = this.allServices.getAllServices();
    }, 4000);
  }
}
