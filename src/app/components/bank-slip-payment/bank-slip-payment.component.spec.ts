import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankSlipPaymentComponent } from './bank-slip-payment.component';

describe('BankSlipPaymentComponent', () => {
  let component: BankSlipPaymentComponent;
  let fixture: ComponentFixture<BankSlipPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankSlipPaymentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankSlipPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
