import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustmapComponent } from './exhaustmap.component';

describe('ExhaustmapComponent', () => {
  let component: ExhaustmapComponent;
  let fixture: ComponentFixture<ExhaustmapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaustmapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaustmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
