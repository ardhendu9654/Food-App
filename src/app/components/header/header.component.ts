import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  username!: User;

  constructor(private cartservice: CartService, private router: Router, private userService: UserService) {

    userService.userObservable.subscribe((newUser) => {
      this.username = newUser ;
    })
    
    cartservice.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount;
    })
    // cartservice.getCartQuantity().subscribe((newcart) => {
    //   this.cartQuantity = newcart.totalQuantity;
    // })
  }

  logout() {
    // localStorage.clear();
    localStorage.removeItem('User');
    this.router.navigate(['/login']).then(() => {
      window.location.reload();
    });
  }

  get isAuth(){
    return this.username.token;
  }

}
