import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent implements OnInit {

  experiences: Experience[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private experienceService: ExperienceService) {}

  ngOnInit(): void {
    this.experienceService.getExperiences().subscribe({
      next: (data) => {
        this.experiences = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Could not load experiences.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  getTagsArray(tags: string): string[] {
    return tags ? tags.split(',') : [];
  }
}