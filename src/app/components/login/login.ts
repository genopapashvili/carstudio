import {Component, inject, signal} from '@angular/core';
import {MatCard, MatCardActions, MatCardContent, MatCardFooter} from '@angular/material/card';
import {MatFormField, MatInput, MatLabel} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {FormBuilder, FormControl, ReactiveFormsModule} from '@angular/forms';
import {Auth} from '../../sheared/services/auth';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatCard,
    MatFormField,
    MatInput,
    MatCardContent,
    MatLabel,
    MatCardFooter,
    MatButton,
    MatCardActions,
    ReactiveFormsModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private fb = inject(FormBuilder)
  private auth = inject(Auth)
  private router = inject(Router)

  protected readonly error = signal("")

  loginControl = this.fb.group({
    username: new FormControl(),
    password: new FormControl()
  })

  protected onLoginClicked() {
    this.auth.login(this.loginControl.controls.username.value, this.loginControl.controls.password.value)
      .subscribe((result) => {
        if (result.data.success) {
          void this.router.navigate(["landing"])
        } else {
          this.error.set("username or password is incorrect")
        }
      })
  }
}
