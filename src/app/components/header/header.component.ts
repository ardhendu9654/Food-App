import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  constructor(private cartservice:CartService) {
    cartservice.getCartQuantity().subscribe((newcart)=>{
      this.cartQuantity = newcart.totalQuantity;
    })
   }
}
