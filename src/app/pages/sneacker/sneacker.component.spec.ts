import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SneackerComponent } from './sneacker.component';

describe('SneackerComponent', () => {
  let component: SneackerComponent;
  let fixture: ComponentFixture<SneackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SneackerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SneackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
