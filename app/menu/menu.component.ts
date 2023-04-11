import { Component } from '@angular/core';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  powitanie: string = "Programowanie aplikacji webowych";

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
    console.log("logout");

  }

  isLoggedIn() {
    console.log(this.authService.isLoggedIn());
    return this.authService.isLoggedIn();
  }
}
