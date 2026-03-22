import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';

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

  formData: Message = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  successMessage = '';
  errorMessage = '';

  constructor(private messageService: MessageService) {}

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.messageService.sendMessage(this.formData).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.successMessage = 'Message sent successfully! I will get back to you soon.';
        this.formData = { name: '', email: '', subject: '', message: '' };
      },
      error: (err) => {
        this.isSubmitting = false;
        this.errorMessage = 'Something went wrong. Please try again.';
        console.error(err);
      }
    });
  }
}