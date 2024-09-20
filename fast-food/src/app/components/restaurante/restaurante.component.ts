import { Component } from '@angular/core';
import { POSComponent } from "../pos/pos.component";
import { DeliveryComponent } from "../delivery/delivery.component";
import { KitchenComponent } from "../kitchen/kitchen.component";

@Component({
  selector: 'app-restaurante',
  standalone: true,
  imports: [POSComponent, DeliveryComponent, KitchenComponent],
  templateUrl: './restaurante.component.html',
  styleUrl: './restaurante.component.css'
})
export class RestauranteComponent {

  
}
