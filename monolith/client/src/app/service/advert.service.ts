import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {ConfigService} from './config.service';
import { Observable } from 'rxjs';
import {Advert} from '../shared/models/advert';


@Injectable({
  providedIn: 'root'
})
export class AdvertService {

  currentUser;
  
  constructor(
    private apiService: ApiService,
    private config: ConfigService
  ) { 
  }
  
  getAdvertsFrom( ): Observable<Advert[]>{
    return this.apiService.get(this.config.users_adverts_url);
  }
  getFilteredAdverts(searchAttributes): Observable<Advert[]> {
    //return this.apiService.get(this.config.all_adverts, )
    return null;
  }
  getAllAdvertsWithPriceList(){
    return this.apiService.get(this.config.all_adverts_with_pricelist);    
  }
  getAllAdverts():Observable<Advert[]>{
    return this.apiService.get(this.config.all_adverts);
  }
  postNewAdvert( ad:Advert ): Observable<Advert[]>{
   return this.apiService.post(this.config.add_advert_url , ad);
   
  }  
  getById(id){
    return this.apiService.get(this.config.get_advert_by_id(id));
  }
  deleteAdvert(id): Observable<void>{
    return this.apiService.delete(this.config.delete_advert_url + '/' + id);
  }
}
