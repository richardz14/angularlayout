import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './components/home/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    {
        path:'',
        redirectTo : '/home',
        pathMatch : 'full'
    },
    {
        path : 'home',
        component : HomepageComponent
    },
    {
        path : 'login',
        component : LoginComponent
    }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ],
    providers : []
})
export class AppRoutingModule {}