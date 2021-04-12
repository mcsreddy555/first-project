import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { Component1Component } from './third/component1/component1.component';
import { Component2Component } from './third/component2/component2.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {  MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
 // import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe,
    FirstComponent,

    SecondComponent,
    ThirdComponent,
    Component1Component,
    Component2Component
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatGridListModule,
    MatPaginatorModule,
    
    MatListModule,
    MatCardModule,
    MatDividerModule,
    
    
    
    // Ng2SearchPipeModule,
    
  ]
})
export class HomeModule { }
