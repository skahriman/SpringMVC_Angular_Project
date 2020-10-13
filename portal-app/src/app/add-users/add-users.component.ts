import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { stringify } from 'querystring';
import { FormBuilder } from '@angular/forms';
import { User } from '../models/user.model';
import { UserDataService } from '../service/data/user-data.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {

  firstName: string;
  lastName: string;
  email: string;
  user: User;

  constructor(private service: UserDataService) { }

  ngOnInit() {
  }

  onSubmit(value) {
    this.firstName = value.firstName;
    this.lastName = value.lastName;
    this.email = value.email;

    this.user = new User(this.firstName, this.lastName, this.email);

    this.service.saveUser(this.user);
  }


}

