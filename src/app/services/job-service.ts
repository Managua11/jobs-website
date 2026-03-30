import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, tap} from 'rxjs';
import {Job} from '../models/job';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobs: any[] = [];

  constructor(private http: HttpClient) {}
  getJobs(): Observable<Job[]>{
    return this.http.get<Job[]>('./assets/data.json').pipe(
      tap(data => this.jobs = data)
    );
  }

  getJobById(id: number) {
    return this.jobs.find(j => j.id === id);
  }
}
