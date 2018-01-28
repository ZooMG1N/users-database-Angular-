import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user/users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];

  constructor(private userService: UsersService) {
  }

  searchStr = '';

  ngOnInit() {
    // this.users = this.userService.users;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
