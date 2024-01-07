// registration-form-dialog.component.ts

import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { JobApplicationService } from '../../job-application.service';

@Component({
  selector: 'app-registration-form-dialog',
  templateUrl: './registration-form-dialog-component.html',
  styleUrls: ['./registration-form-dialog-component.css']
})
export class RegistrationFormDialogComponent {
  @Output() submitClicked = new EventEmitter<string>();

  constructor(
    public dialogRef: MatDialogRef<RegistrationFormDialogComponent>,
    private jobApplicationService: JobApplicationService
  ) { }

  submitForm(jobTitle: string) {
    // Perform form submission logic
    // ...

    // Apply for the job
    this.jobApplicationService.applyForJob(jobTitle);

    // Emit event with the job title when the submit button is clicked
    this.submitClicked.emit(jobTitle);
    this.dialogRef.close();
  }
}
