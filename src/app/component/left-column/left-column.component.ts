import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CvDataServiceService } from 'src/app/services/cv-data-management/cv-data-service.service';


@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftColumnComponent implements OnInit {

  constructor(private _cvData: CvDataServiceService) { }

  ngOnInit(): void {

    //this.contactSession =this._leftColumnDataProvider.getLeftColumnData().contactSection.body;
    //console.log(this._test.contactSection);

    console.log(this._cvData.cvDataRequest());
  }

}
