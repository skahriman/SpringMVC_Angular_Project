import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private userUrl = 'http://localhost:8080/users';
  private users: User[];

  constructor(private service: UserDataService, private http: HttpClient) { }

  retrieveAllUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  refreshUsers() {
    this.service.retrieveAllUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }

  saveUser(user) {
    return this.http.post(this.userUrl, user).subscribe(
      response => {
        alert('successfully saved a user');
      }, error => {
        alert('Can not saved a user');
      }
    );
  }

  deleteUser(user) {
    return this.http.delete(this.userUrl + '/' + user.id);
  }
}
