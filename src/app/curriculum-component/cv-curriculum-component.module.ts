import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvGeneralViewComponent } from './cv-general-view.component';
import { HeaderComponent } from './header/header.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { ToStringPipe } from './to-string.pipe';


@NgModule({
  declarations: [CvGeneralViewComponent, HeaderComponent, LeftColumnComponent, RightColumnComponent, ToStringPipe],
  imports: [
    CommonModule
  ],
  exports:[CvGeneralViewComponent]
})
export class CurriculumComponentModule { }
