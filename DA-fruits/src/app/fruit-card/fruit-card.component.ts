import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iFruits, iReviewEmit } from '../interfaces';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-fruit-card',
  imports: [CommonModule, FormsModule],
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.scss'
})
export class FruitCardComponent {
  @Input() fruit: iFruits = {
    name: "Apfel",
    img: "apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews: [{ name: "Kevin W.", text: "ist lecker" }, { name: "Arne P.", text: "nicht so meins" }],
  }

  inputData = ''

  @Output()fruitReview = new EventEmitter<iReviewEmit>();

  sendInputData() {
    if (this.inputData.length === 0) {
      alert('Screib was!');
      return
    }
    const fruit = this.fruit.name;
    const review = {name: 'Atomfried', text: this.inputData}
    this.fruitReview.emit({fruit, review});
    this.inputData = ''
  }

  fontColorGood = 'green';
  foodColorBad = 'red';


}