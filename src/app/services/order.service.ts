import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { ORDER_CREATE_URL, ORDER_NEW_FOR_CURRENT_USER, ORDERS_PAY_URL } from '../urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrderForCurrentUser():Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_FOR_CURRENT_USER);
  }

  pay(order:Order):Observable<string>{
    return this.http.post<string>(ORDERS_PAY_URL,order);
  }
}
