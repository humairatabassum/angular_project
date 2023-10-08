import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokPostComponent } from './blok-post.component';

describe('BlokPostComponent', () => {
  let component: BlokPostComponent;
  let fixture: ComponentFixture<BlokPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlokPostComponent]
    });
    fixture = TestBed.createComponent(BlokPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
