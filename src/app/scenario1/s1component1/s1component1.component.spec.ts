import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S1component1Component } from './s1component1.component';

describe('S1component1Component', () => {
  let component: S1component1Component;
  let fixture: ComponentFixture<S1component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S1component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S1component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
