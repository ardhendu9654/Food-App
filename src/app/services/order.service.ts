import { Injectable } from '@angular/core';
import { Order } from '../Models/order';
import { ORDER_CREATE_URL } from '../urls';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }

  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }
}
