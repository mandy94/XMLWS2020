import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { ConfigService } from '.';

@Injectable({
  providedIn: 'root'
})
export class CodebookService {  

  constructor(
    private apiService: ApiService,
    private config: ConfigService
) { }

    codebook;
  
    getCodebook() {
      return this.apiService.get(this.config.all_codebook_url);
    }
    getCities(){
      return this.apiService.get(this.config.cities_url);
    }
    addFuelType( fuel : any){
      return this.apiService.post(this.config.add_fuel, fuel);
    }
    
}
