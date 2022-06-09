import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { IResponse } from 'src/app/components/models/IResponse';
import { User } from 'src/app/components/models/User';
import { environment } from 'src/environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private uri: string = environment.API_URI + 'users';
  private bs: BehaviorSubject<boolean> = new BehaviorSubject(<boolean>false);
  public readonly isLogged: Observable<boolean> = this.bs.asObservable();

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }

  login(obj: {
    username: string;
    password: string;
  }): Observable<IResponse<User>> {
    return <Observable<IResponse<User>>>(
      this.http.post(this.uri + '/auth', obj).pipe(
        map((res: any) => {
          if (res.status == 'success') {
            localStorage.setItem('username', obj.username);
            localStorage.setItem('password', obj.password);
            this.bs.next(true);
            this.router.navigateByUrl('/');
            return res;
          } else {
            this._snackBar.open('Usuario o contraseña incorrectos', 'Cerrar', {
              horizontalPosition: 'center',
              verticalPosition: 'top',
            });
            return res;
          }
        })
      )
    );
  }

  logOut() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    this.bs.next(false);
  }

  authMe(): Observable<boolean> {
    let username: string = localStorage.getItem('username') ?? '';
    let password: string = localStorage.getItem('password') ?? '';
    return this.http
      .post(this.uri + '/auth', { username: username, password: password })
      .pipe(
        map((res: any) => {
          if (res.status == 'success'){
            this.bs.next(true);
            return true;
          } else {
            return false;
          }
        })
      );
  }
}
