import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HeaderCartButtonComponent } from './components/layout/header-cart-button/header-cart-button.component';
import { CartIconComponent } from './components/cart/cart-icon/cart-icon.component';
import { MealsSummaryComponent } from './components/meals/meals-summary/meals-summary.component';
import { MealsPageComponent } from './components/meals/meals-page/meals-page.component';
import { AvailableMealsComponent } from './components/meals/available-meals/available-meals.component';
import { CardComponent } from './components/ui/card/card.component';
import { MealItemComponent } from './components/meals/meal-item/meal-item/meal-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCartButtonComponent,
    CartIconComponent,
    MealsSummaryComponent,
    MealsPageComponent,
    AvailableMealsComponent,
    CardComponent,
    MealItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
