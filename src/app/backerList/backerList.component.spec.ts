/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BackerListComponent } from './backerList.component';

describe('BackerListComponent', () => {
  let component: BackerListComponent;
  let fixture: ComponentFixture<BackerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
