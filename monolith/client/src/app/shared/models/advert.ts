import { User } from './models';

export class Advert{
    
   
    id: number;
    title: string;
    description: any;
    manufacturer: any;
    model: any;
    fuel: any;
    gear: any;
    user: User; // owner
    imgmain : string;
    cdwprotection: boolean;
    numberOfKidsSeat: number;
    kidsSeat: boolean;
    cclass:any;
    milage:number;
    priceList = new Pricelist()
    user_id: any;


}

export class Pricelist{
    id:number;
    name:string;
    pricePerDay: number;
    pricePerKm: number;
    cdw:number;
    bonus: number;
}

export interface PricelistInterface{
    name:string;
    pricePerDay: number;
    pricePerKm: number;
    cdw:number;
    id:number;
    bonus: number;
    
}