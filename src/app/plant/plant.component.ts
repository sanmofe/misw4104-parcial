import { Component, OnInit } from '@angular/core';
import { PlantService } from './plant.service';
import { CommonModule } from '@angular/common';
import { Plant } from './Plant';

@Component({
    selector: 'app-plant',
    templateUrl: './plant.component.html',
    styleUrls: ['./plant.component.css'],
    imports: [CommonModule],
    standalone: true
})
export class PlantComponent implements OnInit {

  plants: Plant[] = []

  numbers: number[] = [0, 0];
  constructor(private readonly plant$: PlantService) { }

  ngOnInit(): void {
    this.plant$.getPlants().subscribe(
      res=>{
        this.plants = res
        this.numbers[0] = 0;
        this.numbers[1] = 0;

        this.plants.forEach(plant => {
          if (plant.tipo == "Interior") {
            this.numbers[0] += 1;
          } else if (plant.tipo == "Exterior") {
            this.numbers[1] += 1;
          }
    });
      }
    )
  }

}