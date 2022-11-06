import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMerchComponent } from './edit-merch.component';

describe('EditMerchComponent', () => {
  let component: EditMerchComponent;
  let fixture: ComponentFixture<EditMerchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMerchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditMerchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
