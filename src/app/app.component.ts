import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlantComponent } from './plant/plant.component';
import { FooterComponent } from './footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlantComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'misw4104-parcial';
}
