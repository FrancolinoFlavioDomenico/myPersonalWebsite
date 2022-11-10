import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CvDataService } from 'src/app/services/cv-data-management/cv-data-service.service';
import { CvDataStructureInterface } from 'src/app/services/cv-data-management/cvDataObjectsInterfaces/cv-data-structure-interface.model';
import { LeftColumnDataInterface } from 'src/app/services/cv-data-management/cvDataObjectsInterfaces/left-column-data-interface.model';

@Component({
  selector: 'app-left-column',
  templateUrl: './left-column.component.html',
  styleUrls: ['./left-column.component.sass']
})
export class LeftColumnComponent implements OnInit {

  private _cvDataStructure!: CvDataStructureInterface;

  constructor(private _cvData: CvDataService) { }


  ngOnInit(): void {



    //this.contactSession =this._leftColumnDataProvider.getLeftColumnData().contactSection.body;
    //console.log(this._test.contactSection);
    //console.log("i am component " + this._cvData.getCvData());
    //console.log();

    this._getCvDataStructure();
    console.log("data at init component are " + this._cvDataStructure);



  }

  private _setCvDataStructure(cvDataStructure: CvDataStructureInterface){
    //debugger;
    this._cvDataStructure = cvDataStructure;
    console.log("forse inizializzati " + this._cvDataStructure);
    setInterval(()=>{console.log("data in component are " + this._cvDataStructure)},1000)
  }

  private _getCvDataStructure() {

    this._cvData.getCvDataStructure().pipe().subscribe(
      (cvData) => {

        next: this._setCvDataStructure.bind(this,cvData);
        error: this.dummyFunction.bind(this)

      }
       /*next: (cvData) => {
        this._setCvDataStructure.bind(this,cvData);
        console.log("data subscribed in component are " + cvData);
      },
      erroror: (cvData) => {
        this._setCvDataStructure.bind(this,cvData);
        console.log("data subscribed in component are " + cvData);
      } */

    )

  }
  public dummyFunction(){

  }
}
