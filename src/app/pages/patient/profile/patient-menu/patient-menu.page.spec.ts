import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PatientMenuPage } from './patient-menu.page';

describe('PatientMenuPage', () => {
  let component: PatientMenuPage;
  let fixture: ComponentFixture<PatientMenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PatientMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
