import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job-service';
import {JobCard} from '../job-card/job-card';
import {AsyncPipe} from '@angular/common';
import {Observable, tap} from 'rxjs';

@Component({
  selector: 'app-job-list',
  imports: [
    JobCard,
    AsyncPipe
  ],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss',
})
export class JobList implements OnInit, OnChanges {
  @Input() filterInput: any;

  jobs$!: Observable<Job[]>;
  jobs: Job[] = [];
  constructor(private jobService: JobService) {}

  ngOnChanges() {
  }
  ngOnInit() {
    if (!this.filterInput) {
      this.filterInput = { searchValue: '', locationControl: 'all' };
    }
    this.jobs$ = this.jobService.getJobs().pipe(
      tap((jobs: Job[]) => {
        this.jobs = jobs;
      })
    )
  }
}
