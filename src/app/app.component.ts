import { Component } from '@angular/core';

@Component({
  selector: 'vis-root',
  template:`
<nav class="navbar navbar-fixed-top navbar-dark bg-inverse">
  <div class="container">
    <a class="navbar-brand" [routerLink]="['']">{{projectName}}</a>
    <ul class="nav navbar-nav">
      <li class="nav-item active"><a class="nav-link" [routerLink]="['']">Dashboard</a></li>
      <li class="nav-item"><a class="nav-link" [routerLink]="['/users']">Users</a></li>
      <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
    </ul>
  </div>
</nav>
<div class="container">
  <router-outlet></router-outlet>
  <footer>
    <p>&copy; Company 2014</p>
  </footer>
</div>
  `
})
export class AppComponent {
  projectName = 'VIS Demo';
  title = 'vis works!';
}
