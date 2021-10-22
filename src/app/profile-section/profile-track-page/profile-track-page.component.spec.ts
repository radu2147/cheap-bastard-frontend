import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTrackPageComponent } from './profile-track-page.component';

describe('ProfileTrackPageComponent', () => {
  let component: ProfileTrackPageComponent;
  let fixture: ComponentFixture<ProfileTrackPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTrackPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
