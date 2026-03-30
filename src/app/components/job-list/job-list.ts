import {Component, inject, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Job} from '../../models/job';
import {JobService} from '../../services/job-service';
import {JobCard} from '../job-card/job-card';
import {AsyncPipe} from '@angular/common';
import {combineLatest, map, Observable} from 'rxjs';
import {FilterHelper} from '../../services/filter-helper';

@Component({
  selector: 'app-job-list',
  imports: [
    JobCard,
    AsyncPipe
  ],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss',
})
export class JobList implements OnInit {
  filterHelper = inject(FilterHelper);
  data$!: Observable<{ jobs: Job[]; filter: { name: string; location: string } }>;
  constructor(private jobService: JobService) {}

  ngOnInit() {
    this.data$ = combineLatest([
      this.jobService.getJobs(),
      this.filterHelper.inputSubject
    ]).pipe(
      map(([jobs, filter]) => ({ jobs, filter }))
    );
  }
}
