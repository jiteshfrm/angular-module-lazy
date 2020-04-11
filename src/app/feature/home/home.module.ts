import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { WhatWeDoComponent } from './components/home/what-we-do/what-we-do.component';
//import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [HomeComponent, BannerComponent, WhatWeDoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports:[HomeComponent,BannerComponent,WhatWeDoComponent,HomeRoutingModule]
})
export class HomeModule { }
