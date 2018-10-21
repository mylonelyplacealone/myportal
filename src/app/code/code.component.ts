import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {
  myData="<h1>H1</h1>";
  constructor(private httpClnt:HttpClient) { }

  ngOnInit() {

    this.httpClnt.get('../../assets/about.html')
    // this.httpClnt.get('./about.html')
    .pipe(tap((html:any) =>{
      alert(html);
      this.myData = html;
    }));
  }

  gethtml(){
    console.log('in get html');
    this.httpClnt.get('./about.html',
    // this.httpClnt.get('../../assets/about.html',
    {responseType: 'text'})
    .subscribe((data:any) => {
      // alert(data);
      this.myData = data;
    });
    

    console.log('out get html');

  }

}
