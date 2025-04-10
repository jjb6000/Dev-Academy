import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './landingPage/landingPage.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, LandingPage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
