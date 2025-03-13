import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCategoryComponent } from './session-category.component';

describe('SessionCategoryComponent', () => {
  let component: SessionCategoryComponent;
  let fixture: ComponentFixture<SessionCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
