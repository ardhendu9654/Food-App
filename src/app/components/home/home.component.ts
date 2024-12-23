import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute) {

    // localStorage.setItem("islogedIn","false");

    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm)
      this.foods = this.foodService.getAllFoodsBySearchteams(params.searchTerm);
      else if(params.tag)
      this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
      this.foods = foodService.getAll();
    }) 
    
  }

  ngOnInit(): void {
  }
}
