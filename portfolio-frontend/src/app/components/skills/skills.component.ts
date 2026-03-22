import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent implements OnInit {

  skillCategories: { category: string; skills: Skill[] }[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe({
      next: (data) => {
        this.skillCategories = this.groupByCategory(data);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Could not load skills.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  private groupByCategory(skills: Skill[]): { category: string; skills: Skill[] }[] {
    const groups: { [key: string]: Skill[] } = {};

    skills.forEach(skill => {
      if (!groups[skill.category]) {
        groups[skill.category] = [];
      }
      groups[skill.category].push(skill);
    });

    return Object.keys(groups).map(category => ({
      category,
      skills: groups[category]
    }));
  }
}