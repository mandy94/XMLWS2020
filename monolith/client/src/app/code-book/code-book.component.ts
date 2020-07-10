import { Component, OnInit } from '@angular/core';
import { CodebookService } from 'app/service/codebook.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code-book',
  templateUrl: './code-book.component.html',
  styleUrls: ['./code-book.component.css']
})
export class CodeBookComponent implements OnInit {

  constructor( private cbservice : CodebookService,  private router: Router) { }

  ngOnInit() {
   
  }
 
  passData:any;
  typeName:string;
  link:string;
  showResult = false;

  show(link:string, des:string){    
    this.showResult = false;    
    console.log(this.showResult);
    this.typeName = des;
    this.link = link;
    setTimeout(() => {
      this.showResult = true;
    });
    
    
  }

}