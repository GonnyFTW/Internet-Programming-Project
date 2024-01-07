import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { EmployeeRegistrationComponent } from './pages/employee-registration/employee-registration.component';

const routes: Routes = [
  
  { path: 'about-us', component: AboutUsComponent },
  { path: 'notification', component: NotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
