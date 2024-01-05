import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredJobsDialogComponent } from './filtered-jobs-dialog.component';

describe('FilteredJobsDialogComponent', () => {
  let component: FilteredJobsDialogComponent;
  let fixture: ComponentFixture<FilteredJobsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilteredJobsDialogComponent]
    });
    fixture = TestBed.createComponent(FilteredJobsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
