import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { CvDataStructureInterface } from './cvDataObjectsInterfaces/cv-data-structure-interface';
import { LeftColumnData } from './cvDataObjectsInterfaces/left-column-data';

@Injectable()
export class CvDataService {

  private _cvDataStructure!: CvDataStructureInterface;
  public get cvDataStructure(): CvDataStructureInterface {
    return this._cvDataStructure;
  }
  public set cvDataStructure(value: CvDataStructureInterface) {
    this._cvDataStructure = value;
  }

  constructor(private httpClient: HttpClient) {}


  public async getCvData() {

    /*this.getCvDataRequestSend().subscribe(
    (cvData: CvDataStructureInterface) => {
      this._cvDataStructure = cvData;
      console.log("cv data in subscribe are " + this._cvDataStructure);}//ottengo un oggeto generico non ma se chiamo i songolo campi primitivi li stampa correttamente
    );
    console.log("cv data aftet subscribe are " + this._cvDataStructure);//ottengo undifined

    return this._cvDataStructure;*/

    /*this._cvDataStructure = await this.resolveCvDataObtain();
    console.log("cv data after await are " + this._cvDataStructure);//ottengo un oggeto generico non ma se chiamo i songolo campi primitivi li stampa correttamente

    return this._cvDataStructure;*/

    this.resolveCvDataObtain().then((respone) => {
      console.log("cv data in then block are " + respone);//ottengo un oggeto generico non ma se chiamo i songolo campi primitivi li stampa correttamente
      this._cvDataStructure = respone;
     })
    console.log("cv data after then block are " + this._cvDataStructure);//ottengo undifined

     return this._cvDataStructure;
  }

  private resolveCvDataObtain() {

    return new Promise<CvDataStructureInterface>(
      (resolve, rejected) => {
        this.getCvDataRequestSend().subscribe(
          (cvData: CvDataStructureInterface) => { resolve(cvData) }
        )
      }
    )
  }

  /**
  * ottengo il json con i dati del cv
  */
  private getCvDataRequestSend() {

    return this.httpClient.get<CvDataStructureInterface>("assets/cvData.json");

  }

}
