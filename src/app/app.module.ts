import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CvHeaderComponent } from './component/cv-header/cv-header.component';
import { LeftColumnComponent } from './component/left-column/left-column.component';
import { RightColumnComponent } from './component/right-column/right-column.component';

@NgModule({
  declarations: [
    AppComponent,
    CvHeaderComponent,
    LeftColumnComponent,
    RightColumnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
