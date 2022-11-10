import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { LeftColumnDataInterface } from 'src/app/services/cv-data-management/cvDataObjectsInterfaces/left-column-data-interface.model';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass']
})
export class LeftColumnComponent implements OnInit {

  @Input() public data!: LeftColumnDataInterface;

  constructor() { }
  ngOnInit(): void {

    console.log(`${this.data.profileSection}   ${this.data.contactSection}  ${this.data.interestSection}`)
    console.log(`${this.data}`)

  }




}
