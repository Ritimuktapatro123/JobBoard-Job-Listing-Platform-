import { Component, OnInit } from '@angular/core';
import { JobService, Job } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  jobs: Job[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
    this.jobService.getJobs().subscribe({
      next: (jobs) => {
        this.jobs = jobs;
        console.log('Jobs from backend:', jobs);
      },
      error: (err) => {
        console.error('Error fetching jobs:', err);
      },
      
    });
    
  }
  deleteJob(id: number | undefined): void {
  if (!id) return;

  if (confirm('Are you sure you want to delete this job?')) {
    this.jobService.deleteJob(id).subscribe({
      next: () => {
        this.jobs = this.jobs.filter(job => job.id !== id);
        console.log(`Deleted job with ID: ${id}`);
      },
      error: (err) => {
        console.error('Error deleting job:', err);
      }
    });
  }
}

}
