/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppShowRawJsonComponent } from './show-raw-json.component';

describe('AppShowRawJsonComponent', () => {
  let component: AppShowRawJsonComponent;
  let fixture: ComponentFixture<AppShowRawJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppShowRawJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppShowRawJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
