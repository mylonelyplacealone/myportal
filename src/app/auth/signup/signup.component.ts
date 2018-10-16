import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/shared/user.model';
import { AppService } from 'src/app/shared/app.service';
import { APIResponse } from 'src/app/shared/apiResponse.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user:User;
  signupFailed = false;
  errMsg="";

  constructor(private appSer:AppService,
      private router:Router) { }

  ngOnInit() {
    this.appSer.onLogout();
  }

  onSignUp(form: NgForm){
    this.user = new User({
      name:form.value.name,
      phone:form.value.phone,
      email:form.value.email,
      password:form.value.password,
    });

    this.appSer.signupUser(this.user)
    .subscribe((resp:APIResponse)=>{
      console.log(resp);
      // if(!resp.result){
      if(!resp['success']){
        this.signupFailed = true;
        this.errMsg = resp.message;
      } else{
        // console.log(localStorage.getItem('token'));
        this.router.navigate(['/home']);
      }
    });
  }
}
