import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLibrary2Component } from './test-library2.component';

describe('TestLibrary2Component', () => {
  let component: TestLibrary2Component;
  let fixture: ComponentFixture<TestLibrary2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestLibrary2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLibrary2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
