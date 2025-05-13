import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <header>   
  <div>
      <img src="assets/img/logo.svg" alt="" srcset="">
      <p>DA</p>
      <p>fruits</p>
  </div>
</header>`,
  styleUrl: 'header.component.scss'
})
export class HeaderComponent {}
