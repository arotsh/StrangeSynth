import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreloaderPage } from './preloader.page';

describe('PreloaderPage', () => {
  let component: PreloaderPage;
  let fixture: ComponentFixture<PreloaderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreloaderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreloaderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
