import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicianDetailPage } from './clinician-detail.page';

describe('ClinicianDetailPage', () => {
  let component: ClinicianDetailPage;
  let fixture: ComponentFixture<ClinicianDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClinicianDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
