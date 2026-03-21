import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

    educations = [
    {
      degree: "Master 2 in Software Engineering",
      institution: 'University Name',
      location: 'City, Country',
      startDate: '2020',
      endDate: '2022',
      description: 'Specialized in software architecture, design patterns and modern development practices. Graduated with distinction.',
      tags: ['Software Architecture', 'Design Patterns', 'Research']
    },
    {
      degree: "Master 1 in Computer Science",
      institution: 'University Name',
      location: 'City, Country',
      startDate: '2017',
      endDate: '2020',
      description: 'Studied core computer science fundamentals including algorithms, data structures, databases and software engineering.',
      tags: ['Algorithms', 'Data Structures', 'Databases']
    },
    {
      degree: "Bachelor's in Computer Science",
      institution: 'University Name',
      location: 'City, Country',
      startDate: '2017',
      endDate: '2020',
      description: 'Studied core computer science fundamentals including algorithms, data structures, databases and software engineering.',
      tags: ['Algorithms', 'Data Structures', 'Databases']
    }
  ];

}
