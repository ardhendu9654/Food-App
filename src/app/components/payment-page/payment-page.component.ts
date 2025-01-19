import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/Models/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent {
  order:Order = new Order();

  constructor(private orderService:OrderService, router:Router){
    orderService.getNewOrderForCurrentUser().subscribe({
      next: (order) => {
        this.order = order;
      },
      error: () =>{
        router.navigateByUrl('/checkout')
      }
    })
  }

}
