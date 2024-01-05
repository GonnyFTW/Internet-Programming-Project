import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapdialogComponent } from './mapdialog.component';

describe('MapdialogComponent', () => {
  let component: MapdialogComponent;
  let fixture: ComponentFixture<MapdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapdialogComponent]
    });
    fixture = TestBed.createComponent(MapdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
