import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilteredJobsDialogComponent } from '../filtered-jobs-dialog/filtered-jobs-dialog.component';




@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})

export class EmployeeRegistrationComponent implements OnInit {

  departments: any[] = [];
  employeeList: any[] = [];
  isListView: boolean = true;
  employeeObject: any = {
    "id": "",
    "title": "",
    "company": "",
    "location": "",
    "description": "",
    "requirements": "",
    "postedDate": "",
    "expiryDate": "",
    "isApplied": false
  };

  appliedjobs: any[] =[];

  sortOrder: string = 'asc';
  filteredEmployeeList: any[] | undefined;

  constructor(private http: HttpClient, public dialog: MatDialog) { }

  onIgnore(item: any) {
    // Assuming `employeeList` is an array of jobs
    const indexToRemove = this.employeeList.indexOf(item);

    if (indexToRemove !== -1) {
      // Remove the job from the list
      this.employeeList.splice(indexToRemove, 1);
    }
  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
    this.loadJob();
  }

  loadDepartments() {
    this.http.get("assets/departments.json").subscribe((res: any) => {
      this.departments = res.data;
    },(error)=>{
      console.log("eRRORR ",error)
    });
  }

  loadEmployees() {
    this.http.get("assets/getEmployee.json").subscribe((res: any) => {
      this.employeeList = res.data;
    },(error)=>{
      console.log("eRRORR ",error)
    });
  }

  onApply(item: any) {
    this.employeeObject = item;
    this.isListView = false;
  
  }

  updateAppliedStatus() {
    const appliedJobId = this.employeeObject.id;

    const appliedJob = this.employeeList.find(job => job.id === appliedJobId);
    if (appliedJob) {
      appliedJob.applied = true;
    }

    this.isListView = true;
  }



  onCreateEmp() {
    this.http.get("assets/postEmployee.json").subscribe((res: any) => {
      alert(res.message);
      this.loadEmployees();
      this.employeeObject.isApplied = true;
  
    });
  }

  onEdit(item: any) {
    this.employeeObject = item;
    this.employeeList.forEach(emp => {
      if (emp.id === item.id) {
        emp.applied = true;
      }
    });
    this.isListView = false;
    
  }

  onDelete(item: any) {
    // Your delete logic here
  }

  searchKeyword: string = '';

  loadJob() {
    this.http.get("assets/getEmployee.json").subscribe((res: any) => {
      this.employeeList = res.data.map((emp: any) => ({ ...emp, applied: false }));
    });
  }

  filterByKeyword() {
    console.log(this.searchKeyword)
   
    if (this.searchKeyword.trim() !== '') {
      this.filteredEmployeeList = this.employeeList.filter(
        employee =>
          employee.title.toLowerCase().includes(this.searchKeyword.toLowerCase()) ||
          employee.company.toLowerCase().includes(this.searchKeyword.toLowerCase()) 
          
      );
      console.log("FILTERED EMPLOYEES : ", this.filteredEmployeeList)

      console.log(this.filteredEmployeeList)
    } else {
      this.filteredEmployeeList = undefined; 
    }
  }



  handleButtonClick() {
    console.log('Button clicked!');

    if (this.filteredEmployeeList && this.filteredEmployeeList.length > 0) {
      // Open the dialog with filtered jobs
      const dialogRef = this.dialog.open(FilteredJobsDialogComponent, {
        width: '400px',
        data: { filteredJobs: this.filteredEmployeeList },
      });

      dialogRef.componentInstance.applyClicked.subscribe(() => {
        // This function will be called when the "Apply" button is clicked
        // You can perform actions like displaying the registration form here
        this.displayRegistrationForm();
      });

      dialogRef.afterClosed().subscribe(() => {
        // Other actions after the dialog is closed
      });
    } else {
      console.log('No filtered jobs to display.');
    }
  }

  displayRegistrationForm() {
    this.isListView = false;
    console.log('Displaying registration form');
  }


  sortBy(key: string) {
    this.employeeList.sort((a, b) => {
      const aValue = a[key].toLowerCase();
      const bValue = b[key].toLowerCase();

      if (this.sortOrder === 'asc') {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    });

    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
  }
}
