import { Food } from "./food";

export class cartItems{
    constructor(public food:Food){ }
    quantity:number = 1 ;
    price: number = this.food.price;
  }