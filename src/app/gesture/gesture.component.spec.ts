/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GestureComponent } from './gesture.component';

describe('GestureComponent', () => {
  let component: GestureComponent;
  let fixture: ComponentFixture<GestureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GestureComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
