import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { InsuranceManagementComponent } from './pages/insurance-management/insurance-management.component';
import { ApproveInsuranceComponent } from './pages/approve-insurance/approve-insurance.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard], // ตรวจสอบการ login
      children: [
        { path: '', redirectTo: 'manage-insurance', pathMatch: 'full' },
        { path: 'users', component: UserListComponent },
        { path: 'manage-insurance', component: InsuranceManagementComponent },
        { path: 'approve-insurance', component: ApproveInsuranceComponent }
      ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
