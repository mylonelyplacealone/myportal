import { Component, OnInit } from '@angular/core';
import { AppDataService } from '../shared/appdata.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../sidebar/menuitem.model';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {
  pageData = "";

  previousVal = "";
  nextVal = "";
  menus:MenuItem[];

  currentPos: MenuItem[];
  prevNextPos: MenuItem[];
  strArray:string[];
  currentId:number = 0;

  constructor(private appDataSer:AppDataService,
    private actRoute:ActivatedRoute,
    private router:Router,
    private httpClnt:HttpClient) { }
      
  ngOnInit() {
    this.menus = this.sortarray();
    // console.log(this.menus);

    this.actRoute.queryParams
      .subscribe(params => {
        if(params.val){
          this.httpClnt.get('../../assets/static/' + params.val + '.html', // this.httpClnt.get('../../assets/about.html',
          {responseType: 'text'})
          .subscribe((data:any) => {
            this.pageData = data;

            this.strArray = params.val.split('/');
            this.currentPos = this.menus.filter((menu: MenuItem) => menu.parent === this.strArray[0] && menu.link === this.strArray[1]);
            this.currentId = this.currentPos[0].id;

            if(this.currentPos[0].id === 1){
              this.prevNextPos = this.currentPos;
            } else{
              this.prevNextPos = this.menus.filter((menu: MenuItem) => menu.id === (this.currentPos[0].id - 1));
            }
            this.previousVal = this.prevNextPos[0].parent + '/' + this.prevNextPos[0].link;

            if(this.currentPos[0].id === this.menus.length){
              this.prevNextPos = this.currentPos;
            } else{
              this.prevNextPos = this.menus.filter((menu: MenuItem) => menu.id === (this.currentPos[0].id + 1));
            }
            this.nextVal = this.prevNextPos[0].parent + '/' + this.prevNextPos[0].link;
          });
        }
        else{
          this.router.navigate(['/coursedetails'], { queryParams:{ "val": "1_gettingstarted/1_gettingstarted" } });
        }
      });
  }

  sortarray():MenuItem[]{
    this.menus = [];
    for(let menu of this.appDataSer.getMenus())
    {
      if(menu.children){
        for(let menuchild of menu.children)
        {
          this.menus.push(menuchild);
        }
      }
      //menu.children = [];
      this.menus.push(menu);
    }
    
    return this.menus.map(el => ({...el, children: [] })).sort((a,b)=>a.id < b.id ? -1 : 1);
  }
}
