import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NurseDetailPage } from './nurse-detail.page';

describe('NurseDetailPage', () => {
  let component: NurseDetailPage;
  let fixture: ComponentFixture<NurseDetailPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NurseDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
