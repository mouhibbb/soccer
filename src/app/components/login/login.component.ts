import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
user:any={};
findedUser:any={};
loginForm:FormGroup;
constructor(private fB:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.loginForm=this.fB.group({
      email:[''],
      password:['']
    })
  } 

login(){
  let users=JSON.parse(localStorage.getItem("users")||"[]")
  console.log(users);
  
  for (let i = 0; i < users.length; i++) {
    if ((users[i].email == this.user.email) && (users[i].password==this.user.password)) {
      this.findedUser=users[i]
     }
     console.log(this.findedUser);
     
  } 
  if (this.findedUser) {
    
    localStorage.setItem("connectedUser", JSON.stringify(this.findedUser))
  }
switch (this.findedUser.role) {
  case 'client':
    this.router.navigate([''])
    break;
    case 'football team':
    this.router.navigate([''])
    break;
    case 'football player':
    this.router.navigate([''])
    break;
    case 'admin':
    this.router.navigate(['dashboardadmin'])
    break;
    case 'football match':
    this.router.navigate([''])
    break;

  default:
    break;
}
}
  


  

}
