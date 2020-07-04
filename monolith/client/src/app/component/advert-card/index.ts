import { Advert } from 'app/shared/models/advert';


export class AdvertDTO{
    constructor(data : Advert){
        console.log(data)
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
     
        
    }
 
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