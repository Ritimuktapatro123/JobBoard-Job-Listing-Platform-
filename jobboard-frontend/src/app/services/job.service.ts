import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Job {
  id?: number;
  title: string;
  company: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private apiUrl = 'http://127.0.0.1:8000/api/jobs/';

  constructor(private http: HttpClient) {}

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(this.apiUrl);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.apiUrl, job);
  }

  updateJob(id: number, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}${id}/`, job);
  }

  deleteJob(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
