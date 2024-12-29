import { Component } from '@angular/core';
import { Tag } from 'src/app/Tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent {

  tags? : Tag[]; 

  constructor(foodService : FoodService){
    foodService.getAllTags().subscribe((serverTags)=>{
      this.tags = serverTags;
    });
  }

  ngOnInit(): void {
    
  }

}
