import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactData = {
    name: '',
    email: '',
    message: '',
  };
  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  submitForm(form: any) {
    if (!form.valid) return;

    this.isSubmitting = true;

    emailjs
      .send(
        'service_g5n6gim', // Replace with your EmailJS service ID
        'template_c8kkpvn', // Replace with your EmailJS template ID
        this.contactData,
        'Ax7_uTcCrbrQteYUA' // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          this.isSubmitting = false;
          this.successMessage = 'Thank you for contacting us! We will get back to you soon.';
          form.reset();
        },
        (error) => {
          this.isSubmitting = false;
          this.errorMessage = 'Something went wrong. Please try again later.';
          console.error('EmailJS error:', error);
        }
      );
  }
}
