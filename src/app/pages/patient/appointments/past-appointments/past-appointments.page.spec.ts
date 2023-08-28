import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PastAppointmentsPage } from './past-appointments.page';

describe('PastAppointmentsPage', () => {
  let component: PastAppointmentsPage;
  let fixture: ComponentFixture<PastAppointmentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
