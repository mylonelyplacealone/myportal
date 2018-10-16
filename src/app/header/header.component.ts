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

  LoggedIn:boolean = false;
  
  constructor(private router:Router,
      private appSer:AppService) { }

  ngOnInit() {
    this.subs = this.appSer.userStatusChanged.subscribe(
      (token:any)=>{
        //alert(token);
        this.LoggedIn = token === null?false:true;
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
