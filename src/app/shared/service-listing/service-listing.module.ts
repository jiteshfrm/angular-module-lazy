import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListingComponent } from './service-listing/service-listing.component';



@NgModule({
  declarations: [ServiceListingComponent],
  imports: [
    CommonModule
  ],
  exports:[ServiceListingComponent]
})
export class ServiceListingModule { }
