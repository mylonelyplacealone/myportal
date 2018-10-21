import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/appdata.service';
import { Chapter } from '../shared/chapter.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chapters:Chapter[] = [];
  queryParam="";

  constructor(private appDataSer:AppDataService,
    private actRoute:ActivatedRoute) { }
      
  ngOnInit() {
    this.chapters = this.appDataSer.getLinks('Angular Basics');

   
    this.actRoute.queryParams
      .subscribe(params => {
        if(params.val){
          // alert(params.val)
          this.queryParam = params.val;
        }
      });
  }
}
