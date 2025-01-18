import { Injectable } from '@angular/core';
import { cart } from '../cart';
import { Food } from '../food';
import { cartItems } from '../cartItems';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart = this.getCartFromLocalStorage();
  private cartSubject:BehaviorSubject<cart> = new BehaviorSubject(this.cart);
  constructor() { }


  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id)
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity +1)
      return;
    }
    this.cart.items.push(new cartItems(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
    this.setCartToLocalStorage();

  }

  getCartQuantity():Observable<cart>{
    return this.cartSubject.asObservable();
  }

  changeQuantity(foodId:number,quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem) return;
    cartItem.quantity = quantity;
    this.setCartToLocalStorage();

  }

  clearCart(){
    this.cart = new cart();
    this.setCartToLocalStorage();

  }

  getCartObservable():Observable<cart>{
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    this.cart.totalPrice = this.cart.items.reduce((prevsum, currentItem)=> prevsum + currentItem.price, 0);
    this.cart.totalCount =  this.cart.items.reduce((prevsum, currentItem)=> prevsum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson): new cart();
  }
  getCart():cart{
    return this.cartSubject.value;
  }
}
