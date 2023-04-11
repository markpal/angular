import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Import the ReactiveFormsModule here
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SynComponent } from './syn/syn.component';
import { CorkaComponent } from './corka/corka.component';
import { WnukComponent } from './wnuk/wnuk.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SynComponent,
    CorkaComponent,
    WnukComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule, // Add ReactiveFormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
