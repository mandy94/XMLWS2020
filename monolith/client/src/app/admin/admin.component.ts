import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(    private router: Router) {
  }

  ngOnInit() {
  }
  gotoUsers(){
    this.router.navigate(['/user-config']);
  }
  gotoCodebook(){this.router.navigate(['/codebook']);}
  gotoStats(){this.router.navigate(['/statistic']);}
}

