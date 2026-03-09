import {Component, EventEmitter, Output, signal} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() filterOutput = new EventEmitter();

  locationControl = new FormControl('all');
  searchValue: string = "";
  filter(){
    this.filterOutput.emit({searchValue: this.searchValue, locationControl: this.locationControl.value});
  }
}
