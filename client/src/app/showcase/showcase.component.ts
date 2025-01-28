import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-showcase',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css'],
})
export class ShowcaseComponent {
  images = [
    { src: 'assets/image1.jpg', title: 'Service & House Calls', description: 'Description for Project A' },
    { src: 'assets/image2.jpg', title: 'AC Installs', description: 'Description for Project B' },
    { src: 'assets/image3.jpeg', title: 'Expert Consultation', description: 'Description for Project C' },
    
  ];
}
