import { User } from './user';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import "rxjs/Rx";

@Injectable()
export class UsersService {
  private users: User[] =[];
  private usersUrl ="https://randomuser.me/api?results=";
  constructor(private http: Http) { }
  
getUsers(count: Number) {
      return this.http.get(this.usersUrl + count).toPromise().then((data)=>{
          let users = data.json().results;
          let inx=0;
          for(let user of users){
              this.users.push(new User(++inx,
                                       user.name.first,
                                       user.name.last,
                                       user.picture.large));
          }
          return this.users;
      });
  }

  getUser(id: number){
      return this.users.filter(user => user.id == id)[0];
  }
}

