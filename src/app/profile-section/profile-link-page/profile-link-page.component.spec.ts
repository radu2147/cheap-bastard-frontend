import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLinkPageComponent } from './profile-link-page.component';

describe('ProfileLinkPageComponent', () => {
  let component: ProfileLinkPageComponent;
  let fixture: ComponentFixture<ProfileLinkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLinkPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLinkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
