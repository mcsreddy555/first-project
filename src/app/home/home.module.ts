import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { FilterPipe } from './filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
// import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    HomeComponent,
    FilterPipe,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    // Ng2SearchPipeModule,
    
  ]
})
export class HomeModule { }
