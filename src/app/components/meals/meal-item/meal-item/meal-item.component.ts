import { Component, OnInit } from '@angular/core';
import { MEALS } from 'src/assets/meals-datas';

@Component({
  selector: 'app-meal-item',
  templateUrl: './meal-item.component.html',
  styleUrls: ['./meal-item.component.css']
})
export class MealItemComponent implements OnInit {

  meals = MEALS;

  constructor() { }

  ngOnInit(): void {
  }

}
