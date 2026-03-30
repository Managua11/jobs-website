import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilterHelper {
  inputSubject = new BehaviorSubject({name: '', location: 'all'});

}
