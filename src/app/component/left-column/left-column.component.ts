import { Component, ElementRef, OnInit, ViewEncapsulation } from '@angular/core';
import { LeftColumnDataService } from 'src/app/service/cv-data-management/left-column-data-provider.service';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftColumnComponent implements OnInit {

  contactSession!: Object;



  constructor(public _leftColumnDataProvider: LeftColumnDataService) {  }

  ngOnInit(): void {

this.contactSession =this._leftColumnDataProvider.getLeftColumnData().contactSection.body;

    //console.log();
  }

}
