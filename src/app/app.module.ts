import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store'
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import HeaderComponent from './components/header/header.component';
import NotFoundComponent from './components/not-found/not-found.component';
import UserComponent from './components/user/user.component';
import RoutingModule from './routing/routing.module';
import { reducers } from './store/state/app.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar"
import {MatButtonModule} from "@angular/material/button"
import {MatCardModule} from "@angular/material/card"
import {MatFormFieldModule} from "@angular/material/form-field"
import {MatInputModule} from "@angular/material/input"
import AuthorizationComponent from './components/authorization/authorization.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserComponent,
    HeaderComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    HttpClientModule,
    ReactiveFormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
