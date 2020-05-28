import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedSubmissionsListComponent } from './voted-submissions-list.component';

describe('VotedSubmissionsListComponent', () => {
  let component: VotedSubmissionsListComponent;
  let fixture: ComponentFixture<VotedSubmissionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotedSubmissionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedSubmissionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
