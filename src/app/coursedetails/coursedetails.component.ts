import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/appdata.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Chapter } from '../shared/chapter.model';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  chapters:Chapter[] = [];
  queryParam="";
  pageData = "";

  constructor(private appDataSer:AppDataService,
    private actRoute:ActivatedRoute,
    private httpClnt:HttpClient) { }
      
  ngOnInit() {
    this.chapters = this.appDataSer.getLinks('Angular Basics');

   
    this.actRoute.queryParams
      .subscribe(params => {
        if(params.val){
          // alert(params.val)
          this.queryParam = params.val;

          this.httpClnt.get('../../assets/static/' + this.queryParam + '.html',
          // this.httpClnt.get('../../assets/about.html',
          {responseType: 'text'})
          .subscribe((data:any) => {
            //alert(data);
            this.pageData = data;
          });
        }
      });
  }

}
