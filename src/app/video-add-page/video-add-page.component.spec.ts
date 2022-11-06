import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAddPageComponent } from './video-add-page.component';

describe('VideoAddPageComponent', () => {
  let component: VideoAddPageComponent;
  let fixture: ComponentFixture<VideoAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAddPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
