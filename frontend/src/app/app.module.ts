import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthComponent } from './components/auth/auth.component';
import { HomeComponent } from './components/home/home.component';

import { ToolbarComponent } from './components/toolbar/toolbar.component';

import { FilesComponent } from './components/files/files.component';
import { FilesCreateComponent } from './components/files-create/files-create.component'
import { FilesUpdateComponent } from './components/files-update/files-update.component'
import { FilesDeleteComponent } from './components/files-delete/files-delete.component'

import { TypesComponent } from './components/types/types.component';
import { TypesCreateComponent } from './components/types-create/types-create.component'
import { TypesUpdateComponent } from './components/types-update/types-update.component'

import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component'
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component'
import { FooterComponent } from '../app/components/footer/footer.component'

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    ToolbarComponent,
    FilesComponent,
    FilesCreateComponent,
    FilesUpdateComponent,
    FilesDeleteComponent,
    TypesComponent,
    TypesUpdateComponent,
    TypesCreateComponent,
    CategoriesComponent,
    CategoriesCreateComponent,
    CategoriesUpdateComponent,
    FooterComponent
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
