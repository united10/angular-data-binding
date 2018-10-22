import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { S2component1Component } from './s2component1.component';

describe('S2component1Component', () => {
  let component: S2component1Component;
  let fixture: ComponentFixture<S2component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ S2component1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(S2component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
