import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    console.log('LoginComponent: login method called');
    console.log('LoginComponent: username:', this.username);
    console.log('LoginComponent: password:', this.password);

    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('LoginComponent: login successful', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.username); // Guardar el nombre de usuario
        this.router.navigate(['/recommendations']);  // Redirigir al componente Recommendations
      },
      error => {
        console.log('LoginComponent: login failed', error);
        alert('Login failed');
      }
    );
  }
}
