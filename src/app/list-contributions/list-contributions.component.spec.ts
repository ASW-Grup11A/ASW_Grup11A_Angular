import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContributionsComponent } from './list-contributions.component';

describe('ListContributionsComponent', () => {
  let component: ListContributionsComponent;
  let fixture: ComponentFixture<ListContributionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
