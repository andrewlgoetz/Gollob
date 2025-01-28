import { Component } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Add this line
})
export class HomeComponent {
  phoneNumber = '(905) 920-7636'; // Placeholder phone number
  review = {
    stars: 5, // Number of stars
    text: 'Best HVAC service I’ve ever experienced! Highly recommend to everyone! - Angie, Hamilton ON',
  };
  description = `
    We are a team of friends passionate about providing top-notch HVAC solutions for
    our community. From heating to cooling, we ensure your home and business stay
    comfortable year-round. Our goal is simple: reliable service, honest advice, and
    exceptional results.
  `;
}
