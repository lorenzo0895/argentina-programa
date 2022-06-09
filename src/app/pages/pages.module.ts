import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ComponentsModule } from '../components/components.module';
import { InputTextModule } from 'primeng/inputtext';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, LoginComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    InputTextModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent, LoginComponent],
})
export class PagesModule {}
