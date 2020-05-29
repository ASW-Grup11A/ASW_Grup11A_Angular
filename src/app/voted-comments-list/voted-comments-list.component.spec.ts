import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotedCommentsListComponent } from './voted-comments-list.component';

describe('VotedCommentsListComponent', () => {
  let component: VotedCommentsListComponent;
  let fixture: ComponentFixture<VotedCommentsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotedCommentsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotedCommentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
