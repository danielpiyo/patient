import { Component, OnInit } from '@angular/core';
import { MclinicservicesService } from '../../shared-resources/services/mclinic-service/mclinicservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Mclservices } from '../../shared-resources/types/type';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.page.html',
  styleUrls: ['./service-detail.page.scss'],
})
export class ServiceDetailPage implements OnInit {
  serviceDetail!: Observable<Mclservices>;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _serviceService: MclinicservicesService
  ) {
    // const serviceId = this._activatedRoute.snapshot.params['serviceId'];
    const serviceId = this._activatedRoute.snapshot.paramMap.get('serviceId');
    if (serviceId !== null) {
      this.serviceDetail = this._serviceService.getServiceById(serviceId);
      // Fetch service details using serviceId and populate the page.
    } else {
      // Handle the case where serviceId is null.
    }
  }

  ngOnInit() {}
}
