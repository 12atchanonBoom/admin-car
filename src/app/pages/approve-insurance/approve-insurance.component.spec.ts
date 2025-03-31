import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApproveInsuranceComponent } from './approve-insurance.component';

describe('ApproveInsuranceComponent', () => {
  let component: ApproveInsuranceComponent;
  let fixture: ComponentFixture<ApproveInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApproveInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApproveInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
