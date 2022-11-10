import { Component, OnInit } from '@angular/core';
import { CvDataService } from 'src/app/services/cv-data-management/cv-data-service.service';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass']
})
export class LeftColumnComponent implements OnInit {

  constructor(private _cvData: CvDataService) { }

  ngOnInit(): void {

    //this.contactSession =this._leftColumnDataProvider.getLeftColumnData().contactSection.body;
    //console.log(this._test.contactSection);
    console.log("i am component " + this._cvData.getCvData());
    //console.log();
  }
}
