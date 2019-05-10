import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'info', component: InfoComponent },
  { path: '', component: DashboardComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports : [ RouterModule ]
})
export class AppRoutingModule { }
