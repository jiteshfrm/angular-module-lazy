import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
    declarations:[],
    imports:[HomeModule,AboutModule],
    exports:[HomeModule,AboutModule]
})
export class FeatureModule {}