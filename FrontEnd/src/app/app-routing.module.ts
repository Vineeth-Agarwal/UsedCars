import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarDetailsComponent } from './car-details/car-details.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [ 
{ path: 'carDetails', component: CarDetailsComponent },
{ path: 'summary', component: SummaryComponent },
{ path : '', redirectTo: "/carDetails",pathMatch: 'full'}];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
