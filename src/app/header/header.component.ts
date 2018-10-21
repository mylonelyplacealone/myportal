import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../shared/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs : Subscription;
  isadmin:boolean=false;
  LoggedIn:boolean = false;
  
  constructor(private router:Router,
      private appSer:AppService) { }

  ngOnInit() {
    this.LoggedIn = localStorage.getItem('token') === null ? false :<any>localStorage.getItem('token');
    // this.isadmin = localStorage.getItem('isadmin') === null ? false :<any>localStorage.getItem('isadmin');
    // alert(this.isadmin);
    this.subs = this.appSer.userStatusChanged.subscribe(
      (userInfo:any)=>{
        //alert(token);
        this.LoggedIn = userInfo.loggedin;
        this.isadmin = userInfo.isadmin;
        // alert(this.isadmin);
      }
    );
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
  }

  onLogout(){
    this.appSer.onLogout();
    this.router.navigate(['signin']);
    //Can also clear the whole localStorage with
    //localStorage.clear();
  }
}
