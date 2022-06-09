import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  isLogged: boolean = false;
  subscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
    this.subscription = this.authService.isLogged.subscribe(res => this.isLogged = res);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  activeRoute(): string {
    return this.router.url;
  }

  logOut() {
    this.authService.logOut();
  }

}
