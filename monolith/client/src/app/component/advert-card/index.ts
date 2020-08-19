import { Advert } from 'app/shared/models/advert';
import { UserDTO } from 'app/advert-detailed';


export class AdvertDTO{
    constructor(data? : Advert){    
        if(data != undefined){    
        this.id = data.id;
        this.title = data.title;
        this.model = data.model;
        this.manufacturer = data.manufacturer.title;
        this.gear = data.gear.title;
        this.fuel = data.fuel.title;
        this.img = data.imgmain;
        this.CDW= data.cdwprotection;
        this.numberOfKidsSeat =  data.numberOfKidsSeat;
        this.kidsSeat=  data.kidsSeat;
        this.cclass= data.cclass.title;
        this.milage= data.milage;
        this.user_id = data.user_id;

        }
              
    }
    owner_id:number;
    owner_username:string;
    owner: UserDTO;    
    id: number;
    title: string;
    description: string;
    model: string;
    fuel: string;
    gear: string;
    img:string;
    cclass:string;    
    user_id: number;
    manufacturer:string;
    CDW: boolean;
    numberOfKidsSeat: number;
    kidsSeat: boolean;
    milage:number;
 
}
// this one for adding 
export class AdvertDAO{
    constructor(){}    
    
    title: string;
    description: string;
    model: String;
    fuel: number;
    gear: number;
    img:string;
    cclass:number;        
    manufacturer:number;
    CDW: number;
    numberOfKidsSeat: number;    
    milage:number;
    limitMilage:number;
    priceList:number;
 
}