export class Advert{
    
   
    set_owner_id(user_id: any) {
     this.user_id = user_id;
    }
    id: number;
    title: string;
    description: string;
    model: string;
    fuel: string;
    user_id:0;
}