import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNavigationComponent } from './section-navigation.component';

describe('SectionNavigationComponent', () => {
  let component: SectionNavigationComponent;
  let fixture: ComponentFixture<SectionNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionNavigationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
