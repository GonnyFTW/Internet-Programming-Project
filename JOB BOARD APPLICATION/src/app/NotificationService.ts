import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  private appliedJobs: string[] = [];

  showSuccessMessage(message: string): void {
    // Store the applied job in the array
    this.appliedJobs.push(message);
    console.log(`Success: ${message}`);
  }

  getAppliedJobs(): string[] {
    return this.appliedJobs;
  }
}
