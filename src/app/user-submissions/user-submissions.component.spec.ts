import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSubmissionsComponent } from './user-submissions.component';

describe('UserSubmissionsComponent', () => {
  let component: UserSubmissionsComponent;
  let fixture: ComponentFixture<UserSubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
