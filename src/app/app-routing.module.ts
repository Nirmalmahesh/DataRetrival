import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { LatLangComponent } from './lat-lang/lat-lang.component';
import { SearchByCityComponent } from './search-by-city/search-by-city.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FavorateComponent } from './favorate/favorate.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {
    path:'user',component:UserDashboardComponent,
    children : [
      {path : 'location',component:LatLangComponent},
      {path : 'city',component:SearchByCityComponent},
      {path : 'details/:id',component : ViewDetailsComponent},
      {path : 'favorates',component:FavorateComponent}
    ]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
