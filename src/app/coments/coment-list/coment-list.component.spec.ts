import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentListComponent } from './coment-list.component';

describe('ComentListComponent', () => {
  let component: ComentListComponent;
  let fixture: ComponentFixture<ComentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
