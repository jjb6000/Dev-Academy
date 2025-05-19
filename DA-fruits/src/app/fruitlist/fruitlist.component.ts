import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { iFruits } from '../interfaces';
import { FruitCardComponent } from '../fruit-card/fruit-card.component';
import { fruitData } from './fruitlistData';


@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, FruitCardComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlist: iFruits[] = fruitData;

  nameLog(name: string) {
    console.log(name)
  }

}
