import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser;

  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) {
  }

  initUser() {
    const promise = this.apiService.get(this.config.refresh_token_url).toPromise()
      .then(res => {
        if (res.access_token !== null) {
          return this.getMyInfo().toPromise()
            .then(user => {
              this.currentUser = user;
            });
        }
      })
      .catch(() => null);
    return promise;
  }

  setupUser(user) {
    this.currentUser = user;
  }

  public advertUploadCount(){
    
    console.log(this.amIUser())
    if(this.amIUser())
     return 3;
  }

  getMyId(){
    return this.currentUser != null? this.currentUser.id : null;
   
  }
  getMyInfo() {
    return this.apiService.get(this.config.whoami_url)
      .pipe(map(user => {
        this.currentUser = user;
        return user;
      }));
  }
  amIAdmin(){
    if(this.currentUser != null){
      var auths = this.currentUser.authorities;
      for(var auth of auths)
        if(auth.authority === "ROLE_ADMIN")
          return true;
      return false;
    }
  }
  amIAgancy(){
    if(this.currentUser != null){
      var auths = this.currentUser.authorities;
      for(var auth of auths)
        if(auth.authority === "ROLE_AGENCY")
          return true;
      return false;
    }
  }
  amIUser(){
    if(this.currentUser != null){
      var auths = this.currentUser.authorities;
      for(var auth of auths)
        if(auth.authority === "ROLE_USER")
          return true;
      return false;
    }
  }
  getAll() {
    return this.apiService.get(this.config.users_url);
  }

}
