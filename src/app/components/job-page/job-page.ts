import {Component, OnInit} from '@angular/core';
import {JobsService} from '../../services/jobs-service';
import {ActivatedRoute, Router} from '@angular/router';
import {JobService} from '../../services/job-service';

@Component({
  selector: 'app-job-page',
  imports: [],
  templateUrl: './job-page.html',
  styleUrl: './job-page.scss',
})
export class JobPage implements OnInit {
  job: any;
  constructor(private jobService: JobService,   private route: ActivatedRoute
  ) {
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.job = this.jobService.getJobById(id);
    });
  }
}
