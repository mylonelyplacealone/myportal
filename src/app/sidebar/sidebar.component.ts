import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition, state } from '@angular/animations';
import { MenuItem } from './menuitem.model';
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
      transition('* => *', animate('1000ms ease')),
    ]),
    trigger('toggleState', [
      state('show', style({
        transform: 'translateX(0%)',
      })),
      state('hide',   style({
        transform: 'translateX(-200px)',
      })),
      transition('* => *', animate('1000ms ease')),
    ])
  ]
})
export class SidebarComponent implements OnInit {
  state = "show";
  menulevel:MenuItem[] = [
    new MenuItem('Home', 1, []),
    new MenuItem('Angular Basics', 1 , [
      new MenuItem('Proprty Binding', 2, []),
      new MenuItem('Event Binding', 2, []),
     ]),
    new MenuItem('Project Setup', 1 , [
      new MenuItem('Install NodeJS', 2, []),
      new MenuItem('Create Project', 2, []),
      new MenuItem('Build Command', 2, []),
      ]),
    new MenuItem('Project Structure', 1 , [
      new MenuItem('App Folder', 2, []),
      new MenuItem('App.Module.JS', 2, []),
      new MenuItem('.css.ts Files', 2, []),
      new MenuItem('.html.ts Files', 2, []),
      new MenuItem('.component.ts Files', 2, []),
      ]),
    new MenuItem('Routing', 1, []),
    new MenuItem('Pipes', 1, []),
    new MenuItem('Services', 1, []),
    new MenuItem('HTTP Client', 1, []),
    new MenuItem('Angular Animations', 1, []),
  ];

  constructor() { }

  ngOnInit() { }

  toggleSidebar(){
    this.state = this.state === "hide"? "show":"hide"  
  }
}
