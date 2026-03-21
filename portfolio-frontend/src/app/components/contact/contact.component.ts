import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  contactInfo = [
    { icon: '📧', label: 'Email', value: 'steven.essam@email.com' },
    { icon: '📍', label: 'Location', value: 'City, Country' },
    { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/stevenessam' }
  ];

  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    // For now we just simulate a success
    // Later we will call the Spring Boot API here
    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = 'Message sent successfully! I will get back to you soon.';
      this.formData = { name: '', email: '', subject: '', message: '' };
    }, 1000);
  }
}