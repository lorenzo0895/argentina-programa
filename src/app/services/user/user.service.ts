import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private uri: string = environment.API_URI + 'users';
  constructor() { }

  
}
