import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorGameComponent } from './color-game.component';

describe('ColorGameComponent', () => {
  let component: ColorGameComponent;
  let fixture: ComponentFixture<ColorGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
