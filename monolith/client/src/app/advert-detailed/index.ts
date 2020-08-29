import { Advert } from 'app/shared/models/advert';
import {User} from 'app/shared/models/models'
export class UserRequest{
    
    rentingDate:string;
    returningDate:string;
    rentingTime:string;
    returningTime:string;
    advert = new Advert();
    owner = new UserDTO();
    client = new UserDTO();
    
}
export class NewRentingRequest{
    
    rentingDate;
	returningDate;
	rentingTime;
	returningTime;
	advertid;	
	
}
export class UserDTO{
 
    id:number;
	username:string;
	fullName:string;
}