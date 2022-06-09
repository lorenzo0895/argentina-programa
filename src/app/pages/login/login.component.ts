import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  landingImage: string ='https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/09/20170852/circuitos-microsoft.jpg';
  form!: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  ngOnInit(): void {
      this.authService.isLogged.subscribe(res => {
        if(res) {
          this.router.navigateByUrl('/');
        }
      })
  }

  get username(): AbstractControl | null {
    return this.form.get('username');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }

  login() {
    if(this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.authService.login(this.form.value).subscribe();
  }
  
}
