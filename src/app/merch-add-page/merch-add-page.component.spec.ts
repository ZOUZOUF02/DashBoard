import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchAddPageComponent } from './merch-add-page.component';

describe('MerchAddPageComponent', () => {
  let component: MerchAddPageComponent;
  let fixture: ComponentFixture<MerchAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
