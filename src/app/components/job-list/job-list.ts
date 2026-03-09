import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {JobService} from '../../services/job-service';
import {JobCard} from '../job-card/job-card';
import {AsyncPipe} from '@angular/common';
import {Job} from '../../models/job';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [JobCard, AsyncPipe],
  templateUrl: './job-list.html'
})
export class JobList implements OnInit, OnChanges {
  @Input() filterInput: any;

  private filterSubject = new BehaviorSubject<string>('');

  filteredJobs$!: Observable<Job[]>;

  constructor(private jobService: JobService) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterInput'] && this.filterInput) {
      this.filterSubject.next(this.filterInput.searchValue || ''   );
    }
  }

  ngOnInit() {
    this.filteredJobs$ = combineLatest([
      this.jobService.getJobs(),
      this.filterSubject
    ]).pipe(
      map(([jobs, searchTerm]) => {
        if (!searchTerm) return jobs;
        return jobs.filter(job => job.position === searchTerm);
      })
    );
  }
}
