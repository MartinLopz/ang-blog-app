import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrCard5Component } from './postr-card5.component';

describe('PostrCard5Component', () => {
  let component: PostrCard5Component;
  let fixture: ComponentFixture<PostrCard5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrCard5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrCard5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
