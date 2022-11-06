import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentNotifComponent } from './recent-notif.component';

describe('RecentNotifComponent', () => {
  let component: RecentNotifComponent;
  let fixture: ComponentFixture<RecentNotifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentNotifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentNotifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
