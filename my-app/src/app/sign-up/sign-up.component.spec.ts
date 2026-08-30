import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignupComponent } from './sign-up.component'; // Corrected the name here

describe('SignupComponent', () => {  // Also updated to match the component name
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent] // Corrected the name here as well
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
