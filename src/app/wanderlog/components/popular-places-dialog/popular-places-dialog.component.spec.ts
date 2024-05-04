import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularPlacesDialogComponent } from './popular-places-dialog.component';

describe('PopularPlacesDialogComponent', () => {
  let component: PopularPlacesDialogComponent;
  let fixture: ComponentFixture<PopularPlacesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopularPlacesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PopularPlacesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
