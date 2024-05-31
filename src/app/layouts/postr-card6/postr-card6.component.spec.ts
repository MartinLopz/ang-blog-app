import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrCard6Component } from './postr-card6.component';

describe('PostrCard6Component', () => {
  let component: PostrCard6Component;
  let fixture: ComponentFixture<PostrCard6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrCard6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrCard6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
