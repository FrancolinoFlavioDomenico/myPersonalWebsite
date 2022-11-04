import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.sass'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CvHeaderComponent implements OnInit {


  @Input() qualifica = '';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{

  }

}
