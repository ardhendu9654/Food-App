import { Component } from '@angular/core';
import { cart } from 'src/app/cart';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
cart!:cart
}
