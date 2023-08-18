import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClinicalSpecialityPage } from './clinical-speciality.page';

describe('ClinicalSpecialityPage', () => {
  let component: ClinicalSpecialityPage;
  let fixture: ComponentFixture<ClinicalSpecialityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClinicalSpecialityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
