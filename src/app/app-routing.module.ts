import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityInfoComponent } from './activity-info/activity-info.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PhysicalActivitiesComponent } from './physical-activities/physical-activities.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: PhysicalActivitiesComponent },
  { path: 'diet-plan', component: DietPlanComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'info/:id', component: ActivityInfoComponent },
  { path: 'edit/:id', component: EditActivityComponent },
  { path: 'add', component: AddActivityComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
