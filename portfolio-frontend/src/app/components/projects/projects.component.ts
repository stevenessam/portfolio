import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Could not load projects.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}