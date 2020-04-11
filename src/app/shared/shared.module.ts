import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListingModule } from './service-listing/service-listing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceListingModule
  ],
  exports:[ServiceListingModule]
})
export class SharedModule { }
