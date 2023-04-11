import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute } from '@angular/router';

  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService]
})

export class AppComponent  implements OnInit {

  
  title = 'witaj!';

  constructor(private authService: AuthService, private route: ActivatedRoute) {

   }

 

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  
  ngOnInit() {
  }
}

