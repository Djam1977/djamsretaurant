import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteDishComponent } from './admin-delete-dish.component';

describe('AdminDeleteDishComponent', () => {
  let component: AdminDeleteDishComponent;
  let fixture: ComponentFixture<AdminDeleteDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
