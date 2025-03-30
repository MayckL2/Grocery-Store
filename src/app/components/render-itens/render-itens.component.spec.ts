import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderItensComponent } from './render-itens.component';

describe('RenderItensComponent', () => {
  let component: RenderItensComponent;
  let fixture: ComponentFixture<RenderItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RenderItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RenderItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
