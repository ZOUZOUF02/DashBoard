import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersByRegionComponent } from './users-by-Region.component';

describe('UsersByRegionComponent', () => {
  let component: UsersByRegionComponent;
  let fixture: ComponentFixture<UsersByRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersByRegionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
