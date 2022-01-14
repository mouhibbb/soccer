import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {
  user: any = {}
pro :any
  addAdminForm: FormGroup
  id: any
  title: string
  users: any
  constructor(private formBuilder: FormBuilder, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    this.addAdminForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      confirmPassword: [''],
      tel: ['']
    })
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = "Edit User"
      this.users = JSON.parse(localStorage.getItem("users") || "[]")
      console.log(this.users);
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == this.id) {
          this.user = this.users[i]
        }
      }
    }
    else {
      this.title = "Add Admin"

    }
  }
  addAdmin() {
    //edit
    if (this.id) {
      this.users = JSON.parse(localStorage.getItem("users") || "[]")
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].id == this.id) {
          this.users[i] = this.user
        }
        localStorage.setItem("users", JSON.stringify(this.users))

      }

    }
    else {
    //add

      console.log(this.user)
      this.user.role = "admin";
      console.log(this.user);
      let idUser = JSON.parse(localStorage.getItem("idUser") || "1");
      this.user.id = idUser;
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users))
      localStorage.setItem("idUser", idUser + 1)

    }
  }
}
