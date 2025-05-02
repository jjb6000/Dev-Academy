import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPage } from './main-content/landingPage/landingPage.component';
import { MainContentComponent } from './main-content/main-content.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule,
    RouterOutlet,
    MainContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
