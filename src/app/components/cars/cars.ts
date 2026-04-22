import {Component, computed, inject, signal, WritableSignal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {Car} from '../../sheared/services/car';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cars',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './cars.html',
  styleUrl: './cars.scss',
})
export class Cars {
  private carService = inject(Car)
  private carsRaw = toSignal(this.carService.getCars(), {initialValue: []})

  models = computed(() => new Set(this.carsRaw().map(each => each.model)))
  colors = computed(() => new Set(this.carsRaw().map(each => each.color)))
  years = computed(() => new Set(this.carsRaw().map(each => each.year)))


  modelFilter = signal("")
  colorsFilter = signal("")
  yearsFilter = signal(0)

  protected cars = computed(() => {
    let filtered = this.carsRaw();
    if (this.modelFilter()) {
      filtered = filtered.filter(each => each.model === this.modelFilter())
    }

    if (this.colorsFilter()) {
      filtered = filtered.filter(each => each.color === this.colorsFilter())
    }

    if (this.yearsFilter()) {
      filtered = filtered.filter(each => each.year === this.yearsFilter())
    }

    const search = this.search();
    if (search) {
      filtered = filtered.filter(each => each.model.toUpperCase().includes(search.toUpperCase()) || each.name.toUpperCase().includes(search.toUpperCase()))
    }

    return filtered;
  })

  protected searchControl = new FormControl<string>("")
  search = toSignal(this.searchControl.valueChanges.pipe())

  protected onChanged(event: Event, filter: WritableSignal<any>) {
    const el = event.target as HTMLSelectElement
    if (el) {
      filter.set(el.value)
    }
  }

  protected onChangedYear(event: Event) {
    const el = event.target as HTMLSelectElement
    if (el) {
      this.yearsFilter.set(Number.parseInt(el.value))
    }
  }
}
