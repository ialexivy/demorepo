import { User } from '../../shared/user';
import { UsersService } from './../../shared/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'vis-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  private user:User
  constructor(private userService:UsersService, private activatedRoute:ActivatedRoute) { 
        let userId:number = this.activatedRoute.snapshot.params["id"];
        this.user = this.userService.getUser(userId);
  }

  ngOnInit() {

  }

}
