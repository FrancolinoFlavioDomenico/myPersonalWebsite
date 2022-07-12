import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class LeftColumnComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
