import { Component, OnInit } from '@angular/core';
import { ResauranteService } from '../../services/resaurante.service';
import { FormsModule } from '@angular/forms';
import { Order } from '../../interfaces/order';
import { log } from 'console';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css',
})
export class KitchenComponent implements OnInit {
  constructor(private service: ResauranteService) {}

  ordersKitchen: Order[] = [];
  orderCocinando: Order[] = [];
  orderReady: Order[] = [];
  numero: number = 0;

  valid: Order | null = null;

  numberRandom() {
    let random = Math.floor(Math.random() * 300) + 1;
    this.numero = random;
    return random;
  }

  addKitchenOrder() {
    this.numberRandom();
  }

  cocinarOrder(order: Order) {
    this.orderCocinando.push(order);
    /*rastrear si hay un pedido en proceso de cocción. Si es null, no hay ningún pedido cocinándose. */
    this.valid = order;
  }

  changeValid() {
    /* Copia del array order cocinando antes de que se elimine */
    let deleteOrder = this.orderCocinando.pop();
    if (deleteOrder) {
      this.service.guardarOrderLista(deleteOrder);
    }
    this.valid = null;
    return deleteOrder;
  }

  ngOnInit(): void {
    this.addKitchenOrder();
    this.ordersKitchen = this.service.getOrders();
  }
}
