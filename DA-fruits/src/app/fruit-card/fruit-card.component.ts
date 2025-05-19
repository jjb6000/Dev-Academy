import { Component, EventEmitter, Input, Output } from '@angular/core';
import { iFruits } from '../interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fruit-card',
  imports: [CommonModule],
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

  @Output()fruitName = new EventEmitter<string>();

  emitName() {
    this.fruitName.emit(this.fruit.name)
  }

  fontColorGood = 'green';
  foodColorBad = 'red';


}