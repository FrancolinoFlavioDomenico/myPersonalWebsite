import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-column',
  templateUrl: './right-column.component.html',
  styleUrls: ['./right-column.component.sass']
})
export class RightColumnComponent implements OnInit {

  @Input() qualification = '';
  constructor() { }

  ngOnInit(): void {
  }


}
