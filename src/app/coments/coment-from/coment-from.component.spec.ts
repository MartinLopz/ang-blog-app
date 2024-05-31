import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentFromComponent } from './coment-from.component';

describe('ComentFromComponent', () => {
  let component: ComentFromComponent;
  let fixture: ComponentFixture<ComentFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComentFromComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ComentFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
