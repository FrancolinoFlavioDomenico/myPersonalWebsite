import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class RightColumnComponent implements OnInit {

  @Input() qualification = '';
  constructor() { }

  ngOnInit(): void {
  }

}
