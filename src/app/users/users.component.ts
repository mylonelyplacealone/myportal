import { Component, OnInit } from '@angular/core';
import { AppService } from '../shared/app.service';
import { User } from '../shared/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private appSer:AppService,
      private router:Router) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    if(localStorage.getItem('token') && localStorage.getItem('token') !== "" && localStorage.getItem('token') !== null){
      this.appSer.getUsers()
      .subscribe((res:any)=>{
        console.log(res);
        this.users = res;
      });
    } else{
      this.router.navigate(['signin']);
    }
  }
}
