import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { HomeComponent } from './home/home.component';
import { PhysicalActivitiesComponent } from './physical-activities/physical-activities.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'activities', component: PhysicalActivitiesComponent },
  { path: 'diet-plan', component: DietPlanComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
