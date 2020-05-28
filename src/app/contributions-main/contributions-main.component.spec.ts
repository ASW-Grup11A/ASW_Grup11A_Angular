import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsMainComponent } from './contributions-main.component';

describe('ContributionsMainComponent', () => {
  let component: ContributionsMainComponent;
  let fixture: ComponentFixture<ContributionsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
