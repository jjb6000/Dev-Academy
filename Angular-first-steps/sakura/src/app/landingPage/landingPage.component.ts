import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule],
    template: `/*html*/
    <h1>Hallo Welt</h1>    
    `,
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPage {}