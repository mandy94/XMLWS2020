import { Advert } from 'app/shared/models/advert';

export class AdvertDTO{
    constructor(data : Advert){
        this.id = data.id;
        this.title = data.title;
        this.model = data.model;
        this.gear = data.gear.title;
        this.img = data.imgmain;
        this.CDW= data.cdwprotection;
        this.numberOfKidsSeat=  data.numberOfKidsSeat;
        this.kidsSeat=  data.kidsSeat;
        this.cclass= data.cclass.title;
        this.milage= data.milage;
     
        
    }
 
    id: number;
    title: string;
    description: string;
    model: string;
    fuel: string;
    gear: string;
    img:string;
    user_id: number;

    CDW: boolean;
    numberOfKidsSeat: number;
    kidsSeat: boolean;
    cclass:string;
    milage:number;
 
}