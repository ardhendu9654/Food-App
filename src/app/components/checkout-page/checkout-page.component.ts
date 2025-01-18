import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/Models/order';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  order: Order = new Order();
  checkoutForm!: FormGroup;
  constructor(private cartService: CartService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastrService: ToastrService,
    private orderService: OrderService,
    private router: Router) {
    const cart = cartService.getCart();
    this.order.items = cart.items;
    this.order.totalPrice = cart.totalPrice;
  }

  ngOnInit(): void {
    let { Username, address } = this.userService.currentUser;
    console.log("CurrentUser = ",this.userService.currentUser);
    this.checkoutForm = this.formBuilder.group({
      Username: [Username, Validators.required],
      address: [address, Validators.required]
    });
  }
  get fc() {
    return this.checkoutForm.controls;
  }
  createOrder() {
    if (this.checkoutForm.invalid) {
      this.toastrService.warning('Please Fill The Inputs', 'Invalid Inputs');
      return;
    }

    if (!this.order.addressLatLng) {
      this.toastrService.warning('Please select your location on the map', 'Location');
      return;
    }

    this.order.Username = this.fc['Username'].value;
    this.order.address = this.fc['address'].value;
    console.log(this.order);
    

    this.orderService.create(this.order).subscribe({
      next: () => {
        this.router.navigateByUrl('/payment');
      },
      error: (errorResponse) => {
        this.toastrService.error(errorResponse.error, 'Cart');
      }
    })

  }
}