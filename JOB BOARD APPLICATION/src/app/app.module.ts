import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './pages/employee-registration/employee-registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ComponentrouteComponent } from './pages/componentroute/componentroute.component';
import { FilteredJobsDialogComponent } from './pages/filtered-jobs-dialog/filtered-jobs-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { RegistrationFormDialogComponent } from './pages/registration-form-dialog-component/registration-form-dialog-component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeRegistrationComponent,
    ComponentrouteComponent,
    FilteredJobsDialogComponent,
    AboutUsComponent,
    NotificationComponent,
    RegistrationFormDialogComponent
  ],
  imports: [
    BrowserModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
