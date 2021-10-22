import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousNavbarComponent } from './anonymous-navbar.component';

describe('AnonymousNavbarComponent', () => {
  let component: AnonymousNavbarComponent;
  let fixture: ComponentFixture<AnonymousNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
