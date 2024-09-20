import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestauranteComponent } from "./components/restaurante/restaurante.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RestauranteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fast-food';
}
