import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Appointment } from '../../shared-resources/types/type';
import { ModalController } from '@ionic/angular';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-newpayment',
  templateUrl: './newpayment.page.html',
  styleUrls: ['./newpayment.page.scss'],
})
export class NewpaymentPage implements OnInit {
  @Input() data!: Appointment;
  // @ViewChild('map') mapRef!: ElementRef;
  // map!: GoogleMap;
  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.data);
  }

  // ionViewDidEnter() {
  //   this.createMap();
  // }

  // async createMap() {
  //   this.map = await GoogleMap.create({
  //     id: 'Mclinic',
  //     apiKey: environment.mapskey,
  //     element: this.mapRef.nativeElement,
  //     forceCreate: true,
  //     config: {
  //       center: {
  //         lat: 33.6,
  //         lng: -117.9,
  //       },
  //       zoom: 8,
  //     },
  //   });
  // }

  async closeModel() {
    const close: string = 'Modal Removed';
    await this.modalController.dismiss(close);
  }
}
