import { Food } from "./food";

export class cartItems{
    constructor(public food:Food){ }
    quantity:number = 1 ;
    get price(): number{
      return this.food.price*this.quantity;
    }
  }