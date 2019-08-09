import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatLangComponent } from './lat-lang.component';

describe('LatLangComponent', () => {
  let component: LatLangComponent;
  let fixture: ComponentFixture<LatLangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatLangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatLangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
