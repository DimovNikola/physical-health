import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation-component/navigation-component.component';
import { PhysicalActivitiesComponent } from './physical-activities/physical-activities.component';
import { PhysicalActivityComponent } from './physical-activity/physical-activity.component';
import { HomeComponent } from './home/home.component';
import { DietPlanComponent } from './diet-plan/diet-plan.component';
import { RecipeComponent } from './recipe/recipe.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from './services/userService';
import { ActivityInfoComponent } from './activity-info/activity-info.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { AddActivityComponent } from './add-activity/add-activity.component';
import { DietInfoComponent } from './diet-info/diet-info.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhysicalActivitiesComponent,
    PhysicalActivityComponent,
    HomeComponent,
    DietPlanComponent,
    RecipeComponent,
    LoginComponent,
    RegisterComponent,
    ActivityInfoComponent,
    EditActivityComponent,
    AddActivityComponent,
    DietInfoComponent,
    EditRecipeComponent,
    AddRecipeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
