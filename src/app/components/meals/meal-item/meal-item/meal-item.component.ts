import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { MealService } from '../../../../services/meal.service';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css']
})
export class MealItemComponent implements OnInit {

  meals: any = [];

  constructor(private mealService: MealService, private db: AngularFireDatabase) { }

  ngOnInit(): void {
    const ref = this.mealService.getMeals();
    console.log(ref)
    ref.valueChanges().subscribe(resp => {
      this.meals = resp;
    })
  }
}
