import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFoodComponent } from './selected-food.component';

describe('SelectedFoodComponent', () => {
  let component: SelectedFoodComponent;
  let fixture: ComponentFixture<SelectedFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectedFoodComponent]
    });
    fixture = TestBed.createComponent(SelectedFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
