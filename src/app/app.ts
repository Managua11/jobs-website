import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {JobList} from './components/job-list/job-list';
import {Header} from './components/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('jobs-website');

  filterValues = {
    searchValue: '',
    locationControl: 'all'
  }

  handleSearch(data: any){
    this.filterValues.searchValue = data.searchValue;
    this.filterValues.locationControl = data.locationControl;
  }
}
