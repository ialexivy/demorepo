import { User } from './../../shared/user';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vis-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input()
  private user :User;
  
  constructor() { }

  ngOnInit() {
  }

}
