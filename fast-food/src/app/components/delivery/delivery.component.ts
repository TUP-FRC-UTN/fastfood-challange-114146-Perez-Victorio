import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { ResauranteService } from '../../services/resaurante.service';
import { log } from 'console';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './delivery.component.html',
  styleUrl: './delivery.component.css',
})
export class DeliveryComponent implements OnInit {
  order: Order[] = [];

  constructor(private service: ResauranteService) {}




  ngOnInit():void{
    this.order = this.service.getOrdersReady();
  }


}
