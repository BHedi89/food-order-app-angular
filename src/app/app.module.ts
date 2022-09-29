import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HeaderCartButtonComponent } from './components/layout/header-cart-button/header-cart-button.component';
import { CartIconComponent } from './components/cart/cart-icon/cart-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderCartButtonComponent,
    CartIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
