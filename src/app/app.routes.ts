import {Routes} from '@angular/router';
import {Main} from './components/main/main';
import {Login} from './components/login/login';
import {About} from './components/about/about';
import {Landing} from './components/landing/landing';
import {authGuard} from './sheared/guards/auth-guard';
import {Cars} from './components/cars/cars';

export const routes: Routes = [
  {path: "", redirectTo: "app", pathMatch: "full"},
  {
    path: "app", component: Landing, canActivateChild: [authGuard], children: [
      {path: "", redirectTo: "main", pathMatch: "full"},
      {path: "main", component: Main},
      {path: "cars", component: Cars},
      {path: "about", component: About}
    ]
  },
  {path: "login", component: Login},
  {path: "**", redirectTo: "app", pathMatch: "full"}
];
