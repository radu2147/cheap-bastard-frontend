import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTrackListItemComponent } from './profile-track-list-item.component';

describe('ProfileTrackListItemComponent', () => {
  let component: ProfileTrackListItemComponent;
  let fixture: ComponentFixture<ProfileTrackListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileTrackListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTrackListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
