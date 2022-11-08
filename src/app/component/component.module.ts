import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvHeaderComponent } from './cv-header/cv-header.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { RightColumnComponent } from './right-column/right-column.component';
import { LeftColumnDataService } from '../services/cv-data-management/left-column-data-provider.service';



@NgModule({
  declarations: [CvHeaderComponent,LeftColumnComponent, RightColumnComponent],
  imports: [CommonModule],
  exports:[CvHeaderComponent,LeftColumnComponent,RightColumnComponent]
})
export class ComponentModule { }
