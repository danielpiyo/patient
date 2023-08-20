import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PatientOnboardPage } from './patient-onboard.page';

describe('PatientOnboardPage', () => {
  let component: PatientOnboardPage;
  let fixture: ComponentFixture<PatientOnboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientOnboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
