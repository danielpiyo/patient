import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { AvailableclinicianPage } from './availableclinician.page';

describe('AvailableclinicianPage', () => {
  let component: AvailableclinicianPage;
  let fixture: ComponentFixture<AvailableclinicianPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AvailableclinicianPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
