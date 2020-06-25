export class Advert{
    
   
    set_owner_id(user_id: any) {
     this.user_id = user_id;
    }
    id: number;
    title: string;
    description: string;
    model: any;
    fuel: any;
    gear: any;
    user_id:0;
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