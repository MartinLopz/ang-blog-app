import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriprionFormComponent } from './subscriprion-form.component';

describe('SubscriprionFormComponent', () => {
  let component: SubscriprionFormComponent;
  let fixture: ComponentFixture<SubscriprionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriprionFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscriprionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
