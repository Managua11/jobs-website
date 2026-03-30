import {Component, Input} from '@angular/core';
import {Job} from '../../models/job';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

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
  constructor(private router: Router) {}
  openPage(id:number){
    this.router.navigate([`/job`, id]);
  }
}
