import {of} from 'rxjs';
import {CarLike} from '../app/sheared/services/car';


const mock: any[] = [
  {
    name: "BMW",
    model: "E39",
    color: "Black",
    year: 2003
  },
  {
    name: "Opel",
    model: "Omega",
    color: "Silver",
    year: 2005
  },
  {
    name: "Opel",
    model: "Astra",
    color: "Red",
    year: 2008
  },
  {
    name: "BMW",
    model: "Z4",
    color: "Red",
    year: 2008
  },
  {
    name: "Audi",
    model: "A6",
    color: "Black",
    year: 2015
  }
];
export const cars = of({
  data: mock as CarLike[]
})

