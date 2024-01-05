import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-componentroute',
  templateUrl: './componentroute.component.html',
  styleUrls: ['./componentroute.component.css']
})
export class ComponentrouteComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

  // ... (existing methods)

  handleButtonClick() {
    console.log('Button clicked! Navigating to another page.');

    // Check if you want to perform any additional logic before navigating

    // Navigate to another page (replace 'jobs' with the actual route)
    this.router.navigate(['/jobs']);

    // Optionally, you can pass additional parameters to the route
    // this.router.navigate(['/jobs'], { queryParams: { key: 'value' } });
  }

  // ... (existing code)

}




{


}
