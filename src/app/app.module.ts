import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurriculumComponentModule } from './curriculum-component/cv-curriculum-component.module';
import { ServicesModule } from './services/services.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ContactsComponentModule } from './contacts-component/contacts-component.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ServicesModule,
    CurriculumComponentModule,
    AppRoutingModule,
    ContactsComponentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
