import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
    username!: string;
    password!: string;
    user!: string;
  
    constructor(private authService: AuthService, private router: Router) {}

    
  logout() {
    this.authService.logout();
    console.log("logout");
    this.username = '';
    this.password = '';
  }

  isLoggedIn() {
    console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
    //return this.authService.isAuthenticated();
  }
  
    onSubmit() {
      this.authService.login(this.username, this.password)
        .subscribe((result) => {
          if (result) {
            // login successful
            this.user = this.username;
            console.log('login successful');
            localStorage.setItem('authToken', result.authToken);
            this.router.navigate(['/home']);
            
          } else {
            // login failed
            alert('Login failed. Please try again.');
            this.user = '';
            
          }
        });
    }
}
