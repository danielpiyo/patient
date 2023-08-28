import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewpaymentPage } from './newpayment.page';

describe('NewpaymentPage', () => {
  let component: NewpaymentPage;
  let fixture: ComponentFixture<NewpaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
