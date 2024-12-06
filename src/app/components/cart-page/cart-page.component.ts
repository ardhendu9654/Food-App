import { Component } from '@angular/core';
import { cart } from 'src/app/cart';
import { cartItems } from 'src/app/cartItems';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent {
  cart!: cart;
  constructor(private cartService:CartService){
    this.setCart();

  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItems:cartItems){
    this.cartService.removeFromCart(cartItems.food.id);
    this.setCart();
  }
  changeQuantity(cartItem:cartItems, quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id,quantity);
    this.setCart();
  }
}
