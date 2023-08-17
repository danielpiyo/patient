import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvailablenursesPage } from './availablenurses.page';

describe('AvailablenursesPage', () => {
  let component: AvailablenursesPage;
  let fixture: ComponentFixture<AvailablenursesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvailablenursesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
