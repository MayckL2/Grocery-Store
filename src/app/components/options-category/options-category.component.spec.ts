import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsCategoryComponent } from './options-category.component';

describe('OptionsCategoryComponent', () => {
  let component: OptionsCategoryComponent;
  let fixture: ComponentFixture<OptionsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OptionsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
