export class User{
//   constructor(u , p){
//     this.username = u;
//     this.password = p;
//   }
  constructor(u: User){
    this.username = u.username;
    this.password = u.password;
  }
    username : string;
    password: string;
  }