import { Injectable } from '@angular/core';
import { Order } from '../interfaces/order';
import { log } from 'console';

@Injectable({
  providedIn: 'root'
})
export class ResauranteService {
  
  private cantOrders: Order[] = []
  private ordersReady: Order[] = []; // Para almacenar órdenes listas

  constructor() { }

  guardarOrder(order:Order){
    this.cantOrders.push(order);
  }

  guardarOrderLista(order: Order) {
    this.ordersReady.push(order);
  }

  getOrdersReady(): Order[] {
    return this.ordersReady;
  }

  getOrders():Order[]{
    return this.cantOrders;
  }


}
