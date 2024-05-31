import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCard2Component } from './post-card2.component';

describe('PostCard2Component', () => {
  let component: PostCard2Component;
  let fixture: ComponentFixture<PostCard2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostCard2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostCard2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
