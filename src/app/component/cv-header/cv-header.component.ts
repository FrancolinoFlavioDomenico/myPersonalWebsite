import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CvHeaderComponent implements OnInit, OnChanges {


  @Input() qualification = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`the changes ara`);
    console.log(changes);

    if(this.qualification == changes.qualification.previousValue){
      this.qualification = changes.qualification.currentValue;
     // console.log(this.qualification);
    }
  }

}
