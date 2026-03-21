import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 80 },
        { name: 'HTML / CSS', level: 90 },
        { name: 'SCSS', level: 75 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Spring Boot', level: 80 },
        { name: 'Java', level: 85 },
        { name: 'REST API', level: 85 },
        { name: 'Spring Security', level: 70 }
      ]
    },
    {
      category: 'Database & Tools',
      skills: [
        { name: 'MySQL', level: 80 },
        { name: 'Git', level: 85 },
        { name: 'Maven', level: 75 },
        { name: 'VS Code', level: 90 }
      ]
    },
       {
      category: 'Project Management',
      skills: [
        { name: 'Git', level: 80 },
        { name: 'Agile/Scrum', level: 85 },
        { name: 'Jira', level: 75 },
        { name: 'Confluence', level: 90 }
      ]
    }
  ];
}