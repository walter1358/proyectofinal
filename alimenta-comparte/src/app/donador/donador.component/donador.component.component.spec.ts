import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonadorComponentComponent } from './donador.component.component';

describe('DonadorComponentComponent', () => {
  let component: DonadorComponentComponent;
  let fixture: ComponentFixture<DonadorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DonadorComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DonadorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
