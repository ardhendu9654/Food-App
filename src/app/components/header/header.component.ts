import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  cartQuantity = 0;
  username!:string;

  constructor(private cartservice:CartService, private router:Router) {

    this.username = localStorage.getItem("Username") || 'User';
    console.log(this.username);
    

    cartservice.getCartQuantity().subscribe((newcart)=>{
      this.cartQuantity = newcart.totalQuantity;
    })
   }

   logout(){
    // localStorage.clear();
    localStorage.removeItem('Username');
    this.router.navigate(['/login']).then(()=>{
      window.location.reload();
    });
   }

}
