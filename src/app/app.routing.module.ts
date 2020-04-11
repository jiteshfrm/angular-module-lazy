import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes:Routes = [
    /* {path:'', loadChildren:'./feature/feature.module#HomeModule'},
    {path:'about', loadChildren:'./feature/feature.module#AboutModule'},  */
    {path:'', loadChildren:() => import('./feature/home/home.module').then(m => m.HomeModule) },
    {path:'about', loadChildren:() => import('./feature/about/about.module').then(m => m.AboutModule) },
    {path:'**', redirectTo:'', pathMatch:'full'}
]

@NgModule({
    declarations:[],
    imports:[CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports:[RouterModule]
})
export class AppRoutingModule {}