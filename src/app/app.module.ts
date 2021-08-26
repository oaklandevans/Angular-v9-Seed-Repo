// chapter 4

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { LoginComponent } from './login/login.component';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        HeaderComponent,
        ChildComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
