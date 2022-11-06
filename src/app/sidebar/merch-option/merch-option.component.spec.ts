import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchOptionComponent } from './merch-option.component';

describe('MerchOptionComponent', () => {
  let component: MerchOptionComponent;
  let fixture: ComponentFixture<MerchOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
