import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  size = 8;

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=gb')
      .map(function(response) {
        return response.json();
      })
      .map(response => response.results)
      .map(users => {
        return users.map(user => {
          return {
            name: user.name.first +  ' ' + user.name.last,
            avatar: user.picture.large,
            locationCity: user.location.city,
            locationState: user.location.state,
            locationStreet: user.location.street,
          };
        });
      });
  }

  setSize(size) {
    this.size = size;
  }

  // users = [
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'},
  //   {name: 'one'}
  // ]
}
