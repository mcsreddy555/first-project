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
import {MatFormFieldModule} from '@angular/material/form-field';


import { NavigationComponent } from './navigation/navigation.component';

import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import { MatIconModule} from '@angular/material/icon'
// import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavigationComponent,
    MyDashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    // FormsModule,
    HomeModule,



    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    


    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
