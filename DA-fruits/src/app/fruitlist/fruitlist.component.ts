import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { iFruits, iReview, iReviewEmit } from '../interfaces';
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

  addComment(comment: iReviewEmit) {
    console.log(comment);
    this.fruitlist.forEach(fruit => {
      if (fruit.name === comment.fruit) {
        fruit.reviews.push(comment.review)
      }
    })
  }

  nameLog(name: string) {
    console.log(name)
  }

}
