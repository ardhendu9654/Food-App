import { Injectable } from '@angular/core';
import { Food } from '../food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodsById(id:number):Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchteams(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllTags():Tag[]{
    return sample_tags;
  }

  getAllFoodsByTag(tag:string):Food[]{
    return tag === "All"?
    this.getAll():
    this.getAll().filter(food => food.tags?.map(tag => tag.toLowerCase()).includes(tag.toLowerCase()));
  }
}  
