import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CurriculumComponentModule } from './curriculum-component/curriculum-component.module';
import { ServicesModule } from './services/services.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServicesModule,
    CurriculumComponentModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
