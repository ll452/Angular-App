import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { TabFeatureComponent } from './tip-calculator/tab-feature.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

//defining routes
const routes: Routes = [
  {path: 'tip', component: TabFeatureComponent},
  {path: 'groceries', component: GroceryListComponent},
  {path: 'rps', component: RockPaperScissorsComponent}, 
  {path: 'weather', component: WeatherDashboardComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
