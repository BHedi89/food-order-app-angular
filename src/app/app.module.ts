import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from 'src/environments/environment.prod';

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
import { MealItemFormComponent } from './components/meals/meal-item/meal-item-form/meal-item-form.component';
import { InputComponent } from './components/ui/input/input.component';
import { ModalComponent } from './components/ui/modal/modal.component';
import { CartComponent } from './components/cart/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { CheckoutComponent } from './components/cart/checkout/checkout.component';

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
    MealItemComponent,
    MealItemFormComponent,
    InputComponent,
    ModalComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
