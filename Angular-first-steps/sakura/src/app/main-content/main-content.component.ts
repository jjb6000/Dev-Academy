import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LandingPage } from './landingPage/landingPage.component';
import { OurMenuComponent } from './our-menu/our-menu.component';
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { FindUsComponent } from './find-us/find-us.component';

@Component({
  selector: 'app-main-content',
  imports: [CommonModule,
    LandingPage,
    OurMenuComponent,
    HowToOrderComponent,
    FindUsComponent,
  ],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
