import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SelectedFoodComponent } from './components/selected-food/selected-food.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { LoginComponent } from './components/login/login.component';
import { loginGuard } from './guards/login.guard';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[loginGuard]},
  {path:'login', component:LoginComponent},
  {path: 'search/:searchTerm', component: HomeComponent},
  {path: 'tag/:tag', component: HomeComponent},
  {path: 'food/:id', component:SelectedFoodComponent},
  {path:'cart-page', component:CartPageComponent, canActivate:[loginGuard]},
  {path:'checkout', component:CheckoutPageComponent, canActivate:[loginGuard]},
  {path:'payment', component:PaymentPageComponent, canActivate:[loginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
