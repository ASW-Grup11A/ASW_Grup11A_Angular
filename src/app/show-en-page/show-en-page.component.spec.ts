import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEnPageComponent } from './show-en-page.component';

describe('ShowEnPageComponent', () => {
  let component: ShowEnPageComponent;
  let fixture: ComponentFixture<ShowEnPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEnPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
