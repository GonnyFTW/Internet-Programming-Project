// job-application.service.ts

import { Injectable } from '@angular/core';

interface AppliedJob {
  id: string;
  title: string;
  appliedDate: Date;
}

@Injectable({
  providedIn: 'root',
})
export class JobApplicationService {
  private appliedJobs: AppliedJob[] = [];

  applyForJob(jobTitle: string): void {
    const newJob: AppliedJob = {
      id: this.generateUniqueId(),
      title: jobTitle,
      appliedDate: new Date(),
    };

    this.appliedJobs.push(newJob);
    this.saveAppliedJobs();
  }

  getAppliedJobs(): AppliedJob[] {
    this.appliedJobs = JSON.parse(localStorage.getItem('appliedJobs') || '[]');
    return this.appliedJobs;
  }

  private saveAppliedJobs(): void {
    localStorage.setItem('appliedJobs', JSON.stringify(this.appliedJobs));
  }

  private generateUniqueId(): string {
    // Replace this with your logic to generate a unique ID
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
