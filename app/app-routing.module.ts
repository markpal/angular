import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth.guardservice';
import { CommonModule } from '@angular/common';
import { WnukComponent } from './wnuk/wnuk.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CorkaComponent } from './corka/corka.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'wnuk-page', component: WnukComponent,  canActivate : [AuthGuardService] },
  { path: 'home', component: HomeComponent,  canActivate : [AuthGuardService] },
  { path: 'login', component: LoginComponent,  canActivate : [AuthGuardService] },
  { path: 'corka', component: CorkaComponent,  canActivate : [AuthGuardService]},
  // Define a wildcard route to match any undefined route
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  declarations: [],
  providers: [AuthGuardService],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }


