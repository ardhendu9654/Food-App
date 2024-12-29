import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Food } from 'src/app/food';
import { CartService } from 'src/app/services/cart.service';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-selected-food',
  templateUrl: './selected-food.component.html',
  styleUrls: ['./selected-food.component.css']
})
export class SelectedFoodComponent {

  food!: Food;
  constructor(private activatedRoute: ActivatedRoute, private foodservice: FoodService,
    private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((parmas) => {
      if (parmas.id)
        foodservice.getFoodsById(parmas.id).subscribe(serverFood => {
          this.food = serverFood;
        });
    })
  }
  addToCart() {
    this.cartService.addToCart(this.food)
    this.router.navigateByUrl('/cart-page')
  }
}
