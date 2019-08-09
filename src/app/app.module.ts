import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LatLangComponent } from './lat-lang/lat-lang.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    UserDashboardComponent,
    LatLangComponent
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
