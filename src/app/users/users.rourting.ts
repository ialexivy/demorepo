import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'users/:id', component: UserDetailsComponent},
];

export const UsersRoutes = RouterModule.forChild(routes);