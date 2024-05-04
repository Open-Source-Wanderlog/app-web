import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialOffersDialogComponent } from './special-offers-dialog.component';

describe('SpecialOffersDialogComponent', () => {
  let component: SpecialOffersDialogComponent;
  let fixture: ComponentFixture<SpecialOffersDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecialOffersDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialOffersDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
