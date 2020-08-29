export class User{
//   constructor(u , p){
//     this.username = u;
//     this.password = p;
//   }
  constructor(u: User){
    this.username = u.username;
    this.password = u.password;
    this.id = u.id;
  }
    id:number;
    username : string;
    password: string;
  }
  
  export interface SearchAttributes{
    models:any,
    fuels:any,
    manufacturers:any,
    cclass:any,
    gearType:any
    minPrice:any;
    maxPrice:any;
    milage:any;
    kidsSeat:any;
    cdw:any;
  }