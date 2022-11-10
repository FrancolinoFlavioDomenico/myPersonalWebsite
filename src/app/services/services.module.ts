import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvDataService as CvDataService} from './cv-data-management/cv-data-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CvDataService],
})
export class ServicesModule { }
