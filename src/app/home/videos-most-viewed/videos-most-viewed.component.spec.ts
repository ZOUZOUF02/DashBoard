import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideosMostViewedComponent } from './videos-most-viewed.component';

describe('VideosMostViewedComponent', () => {
  let component: VideosMostViewedComponent;
  let fixture: ComponentFixture<VideosMostViewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideosMostViewedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideosMostViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
