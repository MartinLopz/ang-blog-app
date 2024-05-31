import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostrCard4Component } from './postr-card4.component';

describe('PostrCard4Component', () => {
  let component: PostrCard4Component;
  let fixture: ComponentFixture<PostrCard4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostrCard4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostrCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
