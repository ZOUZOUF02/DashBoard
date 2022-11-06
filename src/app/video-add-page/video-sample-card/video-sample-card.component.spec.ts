import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSampleCardComponent } from './video-sample-card.component';

describe('VideoSampleCardComponent', () => {
  let component: VideoSampleCardComponent;
  let fixture: ComponentFixture<VideoSampleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoSampleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoSampleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
