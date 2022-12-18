import { Component, OnInit } from '@angular/core';
import { CvDataService } from './services/cv-data-service.service';
import { CvDataStructureInterface } from './services/model/cv-data-structure.model';
import { LeftColumnDataInterface } from './services/model/left-column-data-interface.model';

@Component({
  selector: 'app-cv-general-view',
  templateUrl: './cv-general-view.component.html',
  styleUrls: ['./cv-general-view.component.sass']
})
export class CvGeneralView implements OnInit {

  qualification1 = "laureando in informatica";
  qualification2 = "perito informatico";
  qualification = this.qualification1;

  public leftColumnData!: LeftColumnDataInterface;

  constructor(private _cvData: CvDataService) { }

  ngOnInit() {
    this.changeQualification();
    this._getCv();
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

  private _getCv() {
    this._cvData.getCvDataStructure().subscribe(
      (cvData) => {
        next: this._setCvData(cvData);
        error: () => { }
      }
    )
  }

  private _setCvData(cvData: CvDataStructureInterface) {
    this.leftColumnData = cvData.leftColumnData;
  }

}
