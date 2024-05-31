import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrCard8Component } from './postr-card8.component';

describe('PostrCard8Component', () => {
  let component: PostrCard8Component;
  let fixture: ComponentFixture<PostrCard8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrCard8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrCard8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
