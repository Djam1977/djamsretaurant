import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteFlatComponent } from './admin-delete-flat.component';

describe('AdminDeleteFlatComponent', () => {
  let component: AdminDeleteFlatComponent;
  let fixture: ComponentFixture<AdminDeleteFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteFlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminDeleteFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
