import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipCalculatorComponent } from './tip-calculator/tip-calculator.component';
import { GroceryListComponent } from './grocery-list/grocery-list.component';
import { RockPaperScissorsComponent } from './rock-paper-scissors/rock-paper-scissors.component';
import { WeatherDashboardComponent } from './weather-dashboard/weather-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TabFeatureComponent } from './tip-calculator/tab-feature.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { QuestionnaireComponent } from './tip-calculator/questionnaire.component';
import { TipDialogComponent } from './tip-calculator/tip-dialog.component';



// Material Imports
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { RouletteTipComponent } from './tip-calculator/roulette-tip.component';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    TipCalculatorComponent,
    GroceryListComponent,
    RockPaperScissorsComponent,
    WeatherDashboardComponent,
    SideNavComponent,
    TabFeatureComponent,
    RouletteTipComponent,
    HomeComponent,
    QuestionnaireComponent,
    TipDialogComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCardModule,
    MatExpansionModule,
    MatGridListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
