import { Injectable } from '@angular/core';
import { Chapter } from './chapter.model';
import { MenuItem } from '../sidebar/menuitem.model';

@Injectable({
    providedIn: 'root'
  })
export class AppDataService{ 

    menus:MenuItem[] = [
        new MenuItem('Home', 1, []),
        new MenuItem('Angular Basics', 1 , [
          new MenuItem('Proprty Binding', 2, [], 'Property Binding'),
          new MenuItem('Event Binding', 2, [], 'Event Binding'),
         ], 'support'),
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

    filteredList:Chapter[] = [];
    links:Chapter[] = [
        new Chapter('Home', 'Heading 1', '1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Home', 'Heading 2', '2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Home', 'Heading 3', '3 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Angular Basics', 'Property Binding', '1 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
        new Chapter('Angular Basics', 'Event Binding', '2 Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably havent heard of them accusamus labore sustainable VHS.'),
      ];

    getLinks(parentlink:string){
        this.filteredList = this.links.filter((chapter: Chapter) => chapter.parentlinkname === parentlink);
        return this.filteredList;
    }
    
    getMenus(){
        return this.menus;
    }
 }