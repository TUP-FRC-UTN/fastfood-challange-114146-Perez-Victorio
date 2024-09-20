import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../../interfaces/order';
import { ResauranteService } from '../../services/resaurante.service';
import { log } from 'console';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css',
})
export class POSComponent {
  order: Order = { nombre: '', pedido: '' };

  enviarForm(formulario: NgForm) {
    if(formulario.valid){
      /* se crea copia de la orden para que no se modifique el original */
      let copyOrder = {...this.order}
      this.service.guardarOrder(copyOrder)
      console.log(this.service.getOrders()); 
      
    }
  }

  constructor(private service:ResauranteService){}



}
