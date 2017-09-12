import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomepageComponent } from './components/home/homepage.component';
import { FooterComponent } from './components/common/footer.component';
import { LoginComponent } from './components/login/login.component';


// Common
import { NavComponent } from './components/common/nav.component';
import { SportsNavComponent } from './components/widgets/sportsnav.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SportsNavComponent,
    HomepageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
