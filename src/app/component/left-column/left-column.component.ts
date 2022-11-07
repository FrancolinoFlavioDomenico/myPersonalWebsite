import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { LeftColumnDataProviderService } from 'src/app/service/cv-data-management/left-column-data-provider.service';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftColumnComponent implements OnInit {

  leftColumnData!: string;



  constructor(public _leftColumnData: LeftColumnDataProviderService) {  }

  ngOnInit(): void {

    this.leftColumnData = JSON.stringify(this._leftColumnData.leftColumnDataObject.contactSection);

    console.log(this.leftColumnData );
  }

}
