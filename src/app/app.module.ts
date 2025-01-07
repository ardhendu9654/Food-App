import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { TagComponent } from './components/tag/tag.component';
import { CartPageComponent } from './components/cart-page/cart-page.component';
import { SelectedFoodComponent } from './components/selected-food/selected-food.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SearchComponent,
    TagComponent,
    CartPageComponent,
    SelectedFoodComponent,
    NotFoundComponent,
    LoginComponent,
    LoadingComponent,
    CheckoutPageComponent,
    TitleComponent,
    TextInputComponent,
    InputContainerComponent,
    InputValidationComponent,
    OrderItemsListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-buttom-right',
      newestOnTop:false
    })
  ],
  providers: [ 
    {provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }import { ToastrModule } from 'ngx-toastr';
import { TitleComponent } from './components/default/title/title.component';
import { TextInputComponent } from './components/default/text-input/text-input.component';
import { InputContainerComponent } from './components/default/input-container/input-container.component';
import { InputValidationComponent } from './components/default/input-validation/input-validation.component';
import { OrderItemsListComponent } from './components/default/order-items-list/order-items-list.component';
import { MapComponent } from './components/default/map/map.component';

