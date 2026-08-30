import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersHistoryComponent } from './users-history.component';

describe('UsersHistoryComponent', () => {
  let component: UsersHistoryComponent;
  let fixture: ComponentFixture<UsersHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersHistoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
