import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenListComponent } from './hidden-list.component';

describe('HiddenListComponent', () => {
  let component: HiddenListComponent;
  let fixture: ComponentFixture<HiddenListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiddenListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiddenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
