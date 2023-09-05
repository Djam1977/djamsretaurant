import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddDishComponent } from './admin-add-dish.component';

describe('AdminAddDishComponent', () => {
  let component: AdminAddDishComponent;
  let fixture: ComponentFixture<AdminAddDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAddDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
