import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LatLangComponent } from './lat-lang/lat-lang.component';
import { ShowResultsComponent } from './show-results/show-results.component';
import { SearchByCityComponent } from './search-by-city/search-by-city.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FavorateComponent } from './favorate/favorate.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserDashboardComponent,
    LatLangComponent,
    ShowResultsComponent,
    SearchByCityComponent,
    ViewDetailsComponent,
    FavorateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
