import {Injectable} from '@angular/core';
import {cars} from '../../../mock/cars';
import {map} from 'rxjs';

export interface CarLike {
  name: string;
  model: string;
  color: string;
  year: number;
}

@Injectable({
  providedIn: 'root',
})
export class Car {




  getCars() {
    return cars
      .pipe(map(it => it.data))
  }
}
