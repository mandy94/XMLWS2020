import { Component, OnInit } from '@angular/core';
import { CodebookService } from 'app/service/codebook.service';

@Component({
  selector: 'app-code-book',
  templateUrl: './code-book.component.html',
  styleUrls: ['./code-book.component.css']
})
export class CodeBookComponent implements OnInit {

  constructor( private cbservice : CodebookService) { }

  ngOnInit() {
    
    this.showCodes();
  }

  private codes: any;
  
  
  showCodes(){
    this.cbservice.getCodebook().subscribe(data => this.codes = data);
  }

  addFuelType(){
    let fuel;

    this.cbservice.addFuelType(fuel);
  }

}