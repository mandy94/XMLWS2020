import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { AuthService, UserService} from 'app/service/';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {User} from '../../shared/models/models'; 

@Component({
  selector: 'app-api-card',
  templateUrl: './api-card.component.html',
  styleUrls: ['./api-card.component.scss']
})
export class ApiCardComponent implements OnInit {

  @Input() title: string;
  @Input() subTitle: string;
  @Input() imgUrl: string;
  @Input() content: string;
  @Input() apiText: string;
  @Input() username: string;
  @Input() password: string;
  expand = false;

  @Output() apiClick: EventEmitter<any> = new EventEmitter();


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService) {
  }

  ngOnInit() {
  }
  
  form : FormGroup;
  user:User;
  errMsg:string;
  onButtonClick() {
    this.user = new User({
      username : this.username,
      password : this.password,
      id: 0,
    });
    
    this.authService.login(this.user)
      .subscribe(data => {
     
          this.userService.getMyInfo().subscribe();
          this.router.navigate(['/']);
        },err=>{
          this.errMsg = "Doslo je do greske. Verovatno je korisnik blokiran. kontaktirajte vaseg administratora.";
        });      
  }
  

  
}
