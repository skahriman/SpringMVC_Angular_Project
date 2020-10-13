import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../service/data/user-data.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];

  constructor(private service: UserDataService) { }

  ngOnInit() {
    this.refreshUsers();
  }

  refreshUsers() {
    this.service.retrieveAllUsers().subscribe(
      response => {
        this.users = response;
      }
    );
  }

  deleteRow(user: User) {
    this.service.deleteUser(user)
      .subscribe(
        data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

}
