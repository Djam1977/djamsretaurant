import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConnectComponent } from './admin-connect.component';

describe('AdminConnectComponent', () => {
  let component: AdminConnectComponent;
  let fixture: ComponentFixture<AdminConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
