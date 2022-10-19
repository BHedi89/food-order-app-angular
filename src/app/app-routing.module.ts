import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MealsPageComponent } from './components/meals/meals-page/meals-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'meals'},
  {path: 'meals', component: MealsPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
