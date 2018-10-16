import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { APIResponse } from './apiResponse.model';
import { tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class AppService{  
    userStatusChanged = new Subject<any>();
    BaseUrl = "https://mydeckrestapi.herokuapp.com/";//"http://localhost:5000/";//
    header = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    constructor(private httpClient: HttpClient) { }

    signupUser(user:User){
        // console.log(user);

        var userdata = 'name=' + user.name + '&phone=' + user.phone+ '&email=' + user.email
                + '&password=' + user.password + '&role=' + user.role;

        return this.httpClient.post(this.BaseUrl + 'api/user', userdata, { headers:this.header })
        .pipe(tap((res)=>{
          if(!res['success']){
            return new APIResponse({
                result: false,
                message: res['message']
            });
          } else{
            localStorage.setItem('token',  res['token']);
            // console.log(localStorage.getItem('token'));
            this.userStatusChanged.next(localStorage.getItem('token'));
            return new APIResponse({
                result: true,
                message: res['message']
            });
          }
        }));
    }

    signinUser(email:string, password:string):Observable<any>{
        var creds = 'email=' + email + '&password=' + password;
    
        return this.httpClient.post(this.BaseUrl + 'api/authenticate' , creds,{ headers:this.header })
        .pipe(tap((res)=>{
        //   console.log(res);
          if(!res['success']){
            return new APIResponse({
                result: false,
                message: res['message']
            });
          } else{
            localStorage.setItem('token',  res['token']);
            // console.log(localStorage.getItem('token'));
            // console.log('token');
            this.userStatusChanged.next(localStorage.getItem('token'));
            return new APIResponse({
                result: true,
                message: res['message']
            });
          }
        }));
    }

    isUserLoggedIn(){
        this.userStatusChanged.next(localStorage.getItem('token'));
    }

    onLogout(){
        localStorage.removeItem('token');
        this.userStatusChanged.next(null);
    }

    getUsers(){
        return this.httpClient.get(this.BaseUrl + 'api/users?token=' + localStorage.getItem('token'));
      }
}