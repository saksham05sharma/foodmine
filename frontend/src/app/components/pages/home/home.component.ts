import { Component } from '@angular/core';
import { Food } from '../../../shared/models/food';
import { FoodService } from '../../../services/food.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  foods:Food[] = [];

  constructor(private foodService:FoodService, activatedRoute:ActivatedRoute){
    let foodsObservables: Observable<Food[]>;
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm)
      foodsObservables = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      foodsObservables = this.foodService.getAllFoodsByTag(params.tag);
      else
      foodsObservables = foodService.getAll();

      foodsObservables.subscribe((serverFoods)=>{
        this.foods = serverFoods;
      })
    })
  }
}

