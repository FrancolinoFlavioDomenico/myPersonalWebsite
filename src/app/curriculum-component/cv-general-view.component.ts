import { Component, OnInit } from '@angular/core';
import { CvDataService } from '../services/cv-data-management/cv-data-service.service';
import { CvDataStructureInterface } from '../services/cv-data-management/cvDataObjectsInterfaces/cv-data-structure-interface.model';
import { LeftColumnDataInterface } from '../services/cv-data-management/cvDataObjectsInterfaces/left-column-data-interface.model';

@Component({
  selector: 'app-general-view',
  templateUrl: './cv-general-view.component.html',
  styleUrls: ['./cv-general-view.component.sass']
})
export class CvGeneralViewComponent implements OnInit {

  qualification1 = "laureando in informatica";
  qualification2 = "perito informatico";
  qualification = this.qualification1;

  public leftColumnData!: LeftColumnDataInterface;

  constructor(private _cvData: CvDataService) { }

  ngOnInit() {
    this.changeQualification();
    this._getCvDataStructure();
  }

  changeQualification(): void {

    let counter = 0;

    setInterval(() => {
      if (counter % 2 == 0)
        this.qualification = this.qualification2;
      else
        this.qualification = this.qualification1;

      counter++;
    }, 5000);

  }

  private _setCvDataStructure(cvData: CvDataStructureInterface) {
    this.leftColumnData = cvData.leftColumnData;

  }

  private _getCvDataStructure() {

    this._cvData.getCvDataStructure().subscribe(
      (cvData) => {

        next: this._setCvDataStructure(cvData);
        error: () => { }

      }

    )

  }

}
