import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CurriculumModule } from './curriculum/cv-curriculum-component.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactsComponentModule } from './contacts-component/contacts-component.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CurriculumModule,
    AppRoutingModule,
    ContactsComponentModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
