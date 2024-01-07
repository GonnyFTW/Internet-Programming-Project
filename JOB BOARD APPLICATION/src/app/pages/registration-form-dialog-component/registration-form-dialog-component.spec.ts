import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormDialogComponent } from '../registration-form-dialog-component/registration-form-dialog-component';

describe('RegistrationFormDialogComponentComponent', () => {
  let component: RegistrationFormDialogComponent;
  let fixture: ComponentFixture<RegistrationFormDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationFormDialogComponent]
    });
    fixture = TestBed.createComponent(RegistrationFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
