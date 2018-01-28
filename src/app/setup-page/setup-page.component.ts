import { Component, OnInit } from '@angular/core';
import {UsersService} from '../user/users.service';

@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrls: ['./setup-page.component.css']
})
export class SetupPageComponent implements OnInit {

  size;
  routLink = '';

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.size = this.userService.size;
  }

  change() {
    this.userService.setSize(+this.size);
  }

}
