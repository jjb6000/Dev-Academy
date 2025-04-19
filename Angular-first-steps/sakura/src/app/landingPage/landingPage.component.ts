import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./navbar/navbar.component";


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section class="hero-container">
    <app-navbar />
    <h1 class="font-raleway">SAKURA RAMEN</h1>
    <span class="font-raleway" id="subtitle">THE BEST RAMEN IN TOWN</span>
    </section>
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPage { }