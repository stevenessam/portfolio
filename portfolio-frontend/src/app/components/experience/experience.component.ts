import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {

  experiences = [
    {
      title: 'Full Stack Developer',
      organization: 'Company Name',
      location: 'City, Country',
      startDate: '2023',
      endDate: 'Present',
      description: 'Developed and maintained full stack web applications using Angular and Spring Boot.',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'Agile']
    },
    {
      title: 'Software Developer Intern',
      organization: 'Company Name',
      location: 'City, Country',
      startDate: '2022',
      endDate: '2023',
      description: 'Built REST APIs and contributed to frontend development.',
      tags: ['Java', 'REST API', 'Git', 'Scrum']
    }
  ];
}