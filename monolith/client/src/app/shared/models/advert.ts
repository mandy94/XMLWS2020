import { User } from './models';

export class Advert{
    
   
    id: number;
    title: string;
    description: string;
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
    priceList = new PriceList()


}

export class PriceList{

}