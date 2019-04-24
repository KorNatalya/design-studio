import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeOfServicesComponent } from './range-of-services.component';

describe('RangeOfServicesComponent', () => {
  let component: RangeOfServicesComponent;
  let fixture: ComponentFixture<RangeOfServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeOfServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeOfServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
