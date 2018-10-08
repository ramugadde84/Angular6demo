import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { ReactiveFormsModule }    from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { routing } from './app.routing';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TabComponent } from './tab/tab/tab.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserinfolistComponent } from './userinfolist/userinfolist.component';
import {DataTableModule} from "angular-6-datatable";


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    LoginComponent,
    TabComponent,
    UserinfoComponent,
    UserinfolistComponent
    
  ],
  imports: [
    BrowserModule,  
    HttpClientModule,
    ReactiveFormsModule,
    DataTableModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
