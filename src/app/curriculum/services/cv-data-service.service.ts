import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CvDataStructureInterface } from './model/cv-data-structure.model';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {

  constructor(private httpClient: HttpClient) { }

  public getCvDataStructure(): Observable<CvDataStructureInterface> {

    return this.httpClient.get<CvDataStructureInterface>("../../../assets/cvData.json");

  }

}
