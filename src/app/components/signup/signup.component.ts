import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { MustMatch } from '../confirmPwd';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  // etape1
user:any={}
signUpForm:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.signUpForm=this.formBuilder.group({
      firstName:['',[Validators.minLength(5),Validators.required]],
      lastName:['',[Validators.minLength(6),Validators.required]],
      email:['',[Validators.email,Validators.required]],
      password:['',[Validators.maxLength(15),Validators.minLength(8),Validators.required]],
      confirmPassword:['',[Validators.required]],
      tel:['',[Validators.minLength(8),Validators.maxLength(13) ,Validators.required]]
    },
    {
    validator: MustMatch('password','confirmPassword')
    }
    );
  } 
  
  signUp(m:any){
    console.log(m);
    m.role="client"
    console.log(this.user)
    let idUser=JSON.parse(localStorage.getItem("idUser")||"1");
    m.id=idUser;
    let users=JSON.parse(localStorage.getItem("users")||"[]");
    users.push(m);
    localStorage.setItem("users",JSON.stringify(users))
    localStorage.setItem("idUser",idUser+1)

}
}
