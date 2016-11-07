import { DashboardComponent } from './dashboard/dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', component: DashboardComponent },
];

export const mainRouting = RouterModule.forRoot(routes);