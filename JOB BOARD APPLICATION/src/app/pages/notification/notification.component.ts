// notification.component.ts
import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../../NotificationService';

interface AppliedJob {
  id: string;
  title: string;
  appliedDate: Date;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
})
export class NotificationComponent implements OnInit {
  appliedJobs: string[] = [];

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.appliedJobs = this.notificationService.getAppliedJobs();
  }

  
  

  viewJobDetails(jobId: string) {
    // Implement logic to view job details
    console.log(`Viewing details for job with ID ${jobId}`);
  }
}
