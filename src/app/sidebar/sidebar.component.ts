import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { MenuItem } from './menuitem.model';
import { AppDataService } from '../shared/appdata.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[
    trigger('photoState', [
      state('show', style({
        'display': 'block'
      })),
      state('hide',   style({
        transform: 'translateX(-50%) rotateY(90deg)',
        'display': 'none'
      })),
      transition('* => *', animate('500ms ease')),
    ]),
    
    trigger('toggleState', [
      state('show', style({
        transform: 'translateX(0%)',
      })),
      state('hide',   style({
        transform: 'translateX(-200px)',
      })),
      transition('* => *', animate('500ms ease')),
    ]),

    trigger('smallPhotoState', [
      state('hide', style({
        'display': 'block'
      })),
      state('show',   style({
        transform: 'translateX(-50%) rotateY(90deg)',
        'display': 'none'
      })),
      transition('* => *', animate('500ms ease')),
    ])
  ]
})
export class SidebarComponent implements OnInit {
  state = "show";
  menulevel:MenuItem[] = [];

  constructor(private appDataSer:AppDataService) { }

  ngOnInit() {
    this.menulevel = this.appDataSer.getMenus();
   }

  toggleSidebar(){
    this.state = this.state === "hide"? "show":"hide";
  }
}
