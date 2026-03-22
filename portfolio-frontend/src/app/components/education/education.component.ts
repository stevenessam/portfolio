import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../services/education.service';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent implements OnInit {

  educations: Education[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.educationService.getEducations().subscribe({
      next: (data) => {
        this.educations = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Could not load education.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  getTagsArray(tags: string): string[] {
    return tags ? tags.split(',') : [];
  }
}