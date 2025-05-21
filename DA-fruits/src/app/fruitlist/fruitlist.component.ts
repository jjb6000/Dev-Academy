import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { iFruits, iReview, iReviewEmit } from '../shared/interfaces/interfaces';
import { FruitCardComponent } from '../fruit-card/fruit-card.component';
import { FruitDataService } from '../shared/services/fruit-data.service';
// import { fruitData } from './fruitlistData';


@Component({
  selector: 'app-fruitlist',
  imports: [CommonModule, FruitCardComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  // fruitlist: iFruits[] = fruitData;
  fruits = inject(FruitDataService)


  nameLog(name: string) {
    console.log(name)
  }

}
