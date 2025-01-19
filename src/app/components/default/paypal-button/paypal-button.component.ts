import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/Models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';


declare var paypal: any;
@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent {

  @Input()
  order!: Order;
  @ViewChild('paypal', { static: true })
  paypalElement!: ElementRef;

  constructor(private orderService: OrderService,
    private cartService: CartService,
    private router: Router,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    const self = this;
    paypal
      .Buttons({
        createOrder: (data: any, actions: any) => {
          if (!self.order || !self.order.totalPrice) {
            console.error('Invalid order data:', self.order);
            throw new Error('Order data is invalid');
          }
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'USD',
                  value: self.order.totalPrice.toFixed(2), // Ensure valid format
                },
              },
            ],
          });
        },

        onApprove: async (data: any, actions: any) => {
          console.log('Payment approved, capturing...');
          try {
            const payment = await actions.order.capture();
            console.log('Payment captured:', payment);
            this.order.paymentId = payment.id;
            self.orderService.pay(this.order).subscribe({
              next: (orderId) => {
                console.log('Order saved with ID:', orderId);
                this.cartService.clearCart();
                this.router.navigateByUrl('/track/' + orderId);
                this.toastrService.success(
                  'Payment Saved Successfully',
                  'Success'
                );
              },
              error: (error) => {
                console.error('Error saving order:', error);
                this.toastrService.error('Payment Save Failed', 'Error');
              }
            });
          } catch (err) {
            console.error('Error capturing payment:', err);
            this.toastrService.error('Payment Failed', 'Error');
          }
        },

        onError: (err: any) => {
          console.error('PayPal button error:', err);
          this.toastrService.error('Payment Failed', 'Error');
        },
        
      })
      .render(this.paypalElement.nativeElement)
  }
}
