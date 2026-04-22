import {Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Car} from '../../sheared/services/car';

@Component({
  selector: 'app-cars',
  imports: [],
  templateUrl: './cars.html',
  styleUrl: './cars.scss',
})
export class Cars {
  private carService = inject(Car)
  protected cars = toSignal(this.carService.getCars())

}
