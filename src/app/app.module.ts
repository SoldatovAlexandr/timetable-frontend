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
import { CommonModule } from '@angular/common';
import AdminComponent from './components/admin/admin.component';
import CreateAdminModalComponent from './components/modals/create-admin-modal/create-admin-modal.component';
import CreateTeacherModalComponent from './components/modals/create-teacher-modal/create-teacher-modal.component';
import CreateUserModalComponent from './components/modals/create-user-modal/create-user-modal.component';
import CreateGroupModalComponent from './components/modals/create-group-modal/create-group-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    UserComponent,
    HeaderComponent,
    AdminComponent,
    CreateAdminModalComponent,
    CreateTeacherModalComponent,
    CreateGroupModalComponent,
    CreateUserModalComponent,
    AuthorizationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
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
