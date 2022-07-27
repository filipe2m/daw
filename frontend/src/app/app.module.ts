import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FilesComponent } from './components/files/files.component';
import { FilesCreateComponent } from './components/files-create/files-create.component'
import { FilesUpdateComponent } from './components/files-update/files-update.component'
import { FilesDeleteComponent } from './components/files-delete/files-delete.component'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FilesComponent,
    FilesCreateComponent,
    FilesUpdateComponent,
    FilesDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
