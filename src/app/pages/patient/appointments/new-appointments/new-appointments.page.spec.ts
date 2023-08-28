import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { NewAppointmentsPage } from './new-appointments.page';

describe('NewAppointmentsPage', () => {
  let component: NewAppointmentsPage;
  let fixture: ComponentFixture<NewAppointmentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewAppointmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
