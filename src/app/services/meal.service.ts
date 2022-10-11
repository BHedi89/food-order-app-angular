import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(private db: AngularFireDatabase) { }

  getMeals() {
    const ref = this.db.list("meals");
    return ref;
  }
}
