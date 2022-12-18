import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvGeneralView } from './cv-general-view.component';
import { HeaderComponent } from './header/header.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { ToStringPipe } from './to-string.pipe';



@NgModule({
  declarations: [CvGeneralView, HeaderComponent, LeftColumnComponent, RightColumnComponent, ToStringPipe],
  imports: [
    CommonModule,
  ],
  exports:[CvGeneralView]
})
export class CurriculumModule { }
