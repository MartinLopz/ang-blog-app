import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrCard7Component } from './postr-card7.component';

describe('PostrCard7Component', () => {
  let component: PostrCard7Component;
  let fixture: ComponentFixture<PostrCard7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrCard7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrCard7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
