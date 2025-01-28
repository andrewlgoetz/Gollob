import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgFor, MatCardModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  founder = {
    name: 'Nick Gollob',
    image: 'assets/founder.jpeg', // Placeholder image path
    bio: 'Nick Gollob is the founder and visionary leader behind our HVAC solutions. With years of experience in the industry, Nick is dedicated to providing top-notch services and ensuring customer satisfaction.',
  };

  teamMembers = [
    {
      name: 'Andrew Goetz',
      image: 'assets/team1.jpeg',
      bio: 'Technology and Operations',
    },
    {
      name: 'Justin White',
      image: 'assets/team2.jpeg',
      bio: 'Specialist in ventilation systems and air quality.',
    },
    {
      name: 'Daniel Lenarduzzi',
      image: 'assets/team3.jpeg',
      bio: 'Around the clock service, and customer support.',
    },
  ];
}
