import { Component, Input, OnInit } from '@angular/core';
import { ContactSection, InterestSection, LeftColumnDataInterface, ProfileSection } from 'src/app/curriculum/services/model/left-column-data-interface.model';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass']
})
export class LeftColumnComponent implements OnInit {

  @Input() public leftColumn!: LeftColumnDataInterface;

  public allSection!: [
    { key: string, value: ProfileSection, isArray: boolean },
    { key: string, value: InterestSection, isArray: boolean },
    { key: string, value: ContactSection, isArray: boolean }
  ];

  /*   profileSection!: ProfileSection;
    interestSection!: InterestSection;
    contactSection!: ContactSection; */

  constructor() { }


  ngOnInit(): void {

    if (this.leftColumn)

      this._initSections()

  }

  private _initSections(): void {

    this.allSection = [
      { key: "profileSection", value: this.leftColumn.profileSection, isArray: Array.isArray(this.leftColumn.profileSection.body) },
      { key: "interestSection", value: this.leftColumn.interestSection, isArray: Array.isArray(this.leftColumn.interestSection.body) },
      { key: "contactSection", value: this.leftColumn.contactSection, isArray: Array.isArray(this.leftColumn.contactSection.body) }
    ]
  }





}
