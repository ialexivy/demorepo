import { UsersService } from './../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { User } from "../shared/user";

@Component({
  selector: 'vis-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  private users: Array<User> = [];
  constructor(private userService: UsersService) { }

  ngOnInit() {
      this.userService.getUsers(5).then(users=>{
          for(let user of users){
            this.users.push(user);
          }
      });
  }

}
