import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLinkListItemComponent } from './profile-link-list-item.component';

describe('ProfileLinkListItemComponent', () => {
  let component: ProfileLinkListItemComponent;
  let fixture: ComponentFixture<ProfileLinkListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLinkListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLinkListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
