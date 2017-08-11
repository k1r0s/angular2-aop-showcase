import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { ErrorDialogComponent } from "./components/error-dialog/error-dialog.component"

import { AppComponent } from './components/app/app.component';
import { UserRepository } from './services/user-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDialogComponent,
    ErrorDialogComponent
  ],
  entryComponents: [
    UserDialogComponent,
    ErrorDialogComponent
  ],
  imports: [
    HttpModule,
    MaterialModule,
    BrowserModule,
    NoopAnimationsModule
  ],
  providers: [UserRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
