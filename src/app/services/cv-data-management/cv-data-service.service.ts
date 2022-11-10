import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { CvDataStructureInterface } from './cvDataObjectsInterfaces/cv-data-structure-interface.model';

@Injectable()
export class CvDataService {

  private _cvDataStructure!: CvDataStructureInterface;

  constructor(private httpClient: HttpClient) { }

  public getCvDataStructure() {

    return this.httpClient.get<CvDataStructureInterface>("assets/cvData.json");

  }

}
