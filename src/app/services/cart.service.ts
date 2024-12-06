import { Injectable } from '@angular/core';
import { cart } from '../cart';
import { Food } from '../food';
import { cartItems } from '../cartItems';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart = new cart();
  // constructor() { }
  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new cartItems(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)

  }

  changeQuantity(foodId:number,quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart():cart{
    return this.cart;
  }
}
