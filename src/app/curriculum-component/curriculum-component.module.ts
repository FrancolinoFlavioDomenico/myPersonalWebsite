import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralViewComponent } from './general-view.component';
import { HeaderComponent } from './header/header.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';


@NgModule({
  declarations: [GeneralViewComponent, HeaderComponent, LeftColumnComponent, RightColumnComponent],
  imports: [
    CommonModule
  ],
  exports:[GeneralViewComponent]
})
export class CurriculumComponentModule { }
