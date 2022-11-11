import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ContactSection, InterestSection, LeftColumnDataInterface, ProfileSection } from 'src/app/services/cv-data-management/cvDataObjectsInterfaces/left-column-data-interface.model';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass']
})
export class LeftColumnComponent implements OnInit {

  @Input() public data!: LeftColumnDataInterface;

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

    if (this.data)

      this._initSections()

  }

  private _initSections(): void {

    this.allSection = [
      { key: "profileSection", value: this.data.profileSection, isArray: Array.isArray(this.data.profileSection.body) },
      { key: "interestSection", value: this.data.interestSection, isArray: Array.isArray(this.data.interestSection.body) },
      { key: "contactSection", value: this.data.contactSection, isArray: Array.isArray(this.data.contactSection.body) }
    ]
  }





}
