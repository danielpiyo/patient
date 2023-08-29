import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NurseService } from '../../shared-resources/services/nurses-service/nurse.service';
import { Observable } from 'rxjs';
import { Nurse } from '../../shared-resources/types/type';

@Component({
  selector: 'app-nurse-detail',
  templateUrl: './nurse-detail.page.html',
  styleUrls: ['./nurse-detail.page.scss'],
})
export class NurseDetailPage implements OnInit {
  nurseDetails!: Observable<Nurse>;

  constructor(
    private _nurseService: NurseService,
    private _route: ActivatedRoute
  ) {
    const nurseID = this._route.snapshot.params['nurseId'];
    if (nurseID !== null) {
      this.nurseDetails = this._nurseService.getNurseById(nurseID);
    }
  }

  ngOnInit() {}
}
