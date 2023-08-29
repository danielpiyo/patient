import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PastpaymentPage } from './pastpayment.page';

describe('PastpaymentPage', () => {
  let component: PastpaymentPage;
  let fixture: ComponentFixture<PastpaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PastpaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
