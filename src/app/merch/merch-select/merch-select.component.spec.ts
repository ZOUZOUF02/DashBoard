import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchSelectComponent } from './merch-select.component';

describe('MerchSelectComponent', () => {
  let component: MerchSelectComponent;
  let fixture: ComponentFixture<MerchSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
