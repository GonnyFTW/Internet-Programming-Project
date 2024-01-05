import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filtered-jobs-dialog',
  templateUrl: './filtered-jobs-dialog.component.html',
  styleUrls: ['./filtered-jobs-dialog.component.css']
})
export class FilteredJobsDialogComponent {
  @Output() applyClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<FilteredJobsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onClose() {
    this.dialogRef.close();
  }

  onApply() {
    // Emit the event when the "Apply" button is clicked
    this.applyClicked.emit();
    this.dialogRef.close();
  }
}
