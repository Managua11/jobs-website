import {Component, Input} from '@angular/core';
import {Job} from '../../models/job';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-job-card',
  imports: [
    NgIf
  ],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  @Input() job!: Job;
}
