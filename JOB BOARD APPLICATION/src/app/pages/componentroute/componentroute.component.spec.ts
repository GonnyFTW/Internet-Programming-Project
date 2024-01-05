import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentrouteComponent } from './componentroute.component';

describe('ComponentrouteComponent', () => {
  let component: ComponentrouteComponent;
  let fixture: ComponentFixture<ComponentrouteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentrouteComponent]
    });
    fixture = TestBed.createComponent(ComponentrouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
