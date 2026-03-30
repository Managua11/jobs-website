import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Job} from '../../models/job';

@Component({
  selector: 'app-post',
  imports: [
    FormsModule
  ],
  templateUrl: './post.html',
  styleUrl: './post.scss',
})
export class Post {
    job: Job = {
      id: -1,
      company: "",
      logo: "",
      new: false,
      featured: false,
      position: "",
      role: "",
      level: "",
      postedAt: "",
      contract: "",
      location: "",
      languages: [],
      tools: [],
      responsibilities: [],
      requirements: []
    };
  onSubmit(){

  }
}
