import {Injectable} from '@angular/core';
import {of} from 'rxjs';
import {users} from '../../../mock/users';

type Response<T> = {
  data: T
}

type Success = {
  success: boolean
}


@Injectable({
  providedIn: 'root',
})
export class Auth {

  login(username: string, password: string) {
    const foundUser = users.find(each => each.username === username && each.password === password)

    if (foundUser) {
      this.saveToken("abc")
    }

    return of({
      data: {success: !!foundUser}
    })
  }

  private saveToken(token: string) {
    localStorage.setItem("token", token)
  }

  public removeToken() {
    localStorage.removeItem("token")
  }

  public hasToken(){
    return localStorage.getItem("token")
  }

}
