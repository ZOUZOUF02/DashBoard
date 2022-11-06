import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMerchComponent } from './one-merch.component';

describe('OneMerchComponent', () => {
  let component: OneMerchComponent;
  let fixture: ComponentFixture<OneMerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMerchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
