import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NursesSpecialityPage } from './nurses-speciality.page';

describe('NursesSpecialityPage', () => {
  let component: NursesSpecialityPage;
  let fixture: ComponentFixture<NursesSpecialityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NursesSpecialityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
