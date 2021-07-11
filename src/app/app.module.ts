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
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
