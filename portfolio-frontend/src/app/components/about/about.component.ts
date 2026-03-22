import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {

  about: About | null = null;
  isLoading = true;
  errorMessage = '';

  stats: { number: string; label: string }[] = [];

  constructor(private aboutService: AboutService) {}

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe({
      next: (data) => {
        if (data.length > 0) {
          this.about = data[0];
          this.stats = [
            { number: this.about.yearsExperience, label: 'Years Experience' },
            { number: this.about.projectsCompleted, label: 'Projects Completed' },
            { number: 'MSc', label: 'Software Engineering' },
            { number: '∞', label: 'Lines of Code' }
          ];
        }
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Could not load about info.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}