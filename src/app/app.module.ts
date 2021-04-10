import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { HomeModule } from './home/home.module';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon'
// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // FormsModule,
    HomeModule,


    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }