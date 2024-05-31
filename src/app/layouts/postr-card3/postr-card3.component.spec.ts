import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrCard3Component } from './postr-card3.component';

describe('PostrCard3Component', () => {
  let component: PostrCard3Component;
  let fixture: ComponentFixture<PostrCard3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrCard3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
