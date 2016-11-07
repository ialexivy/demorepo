import { UsersService } from './../shared/users.service';
import { UsersRoutes } from './users.rourting';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutes
  ],
  providers:[UsersService],
  declarations: [UsersComponent, UserComponent, UserDetailsComponent]
})
export class UsersModule { }
