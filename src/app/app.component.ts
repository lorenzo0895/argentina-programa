import { Component, OnInit } from '@angular/core';
import { IException } from './components/models/IException';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  prueba: IException = {error: 'pruebaaa'};

  constructor(private authService: AuthService) {
    this.authService.authMe().subscribe();
  }

}
