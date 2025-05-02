import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPage } from './landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule,
    LandingPage,
    OurMenuComponent,
    FooterComponent,
    HowToOrderComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
