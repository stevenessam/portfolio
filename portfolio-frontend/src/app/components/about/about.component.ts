import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  about = {
    name: 'Steven Essam',
    degree: "Master's in Software Engineering",
    focus: 'Full Stack Development',
    status: 'Available for opportunities',
    bio1: 'I am a Software Development Engineer with a Master\'s degree, passionate about building scalable and modern web applications. I enjoy working across the full stack — from designing REST APIs with Spring Boot to building dynamic interfaces with Angular.',
    bio2: 'I am always learning and improving my skills, with a strong focus on clean architecture, good coding practices and delivering real value through software.'
  };

  stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Completed' },
    { number: 'MSc', label: 'Software Engineering' },
    { number: '∞', label: 'Lines of Code' }
  ];
}