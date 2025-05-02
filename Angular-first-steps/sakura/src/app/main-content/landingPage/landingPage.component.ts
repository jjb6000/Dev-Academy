import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    templateUrl: './landingPage.component.html',
    styleUrls: ['./landingPage.component.scss']
})

export class LandingPage { }