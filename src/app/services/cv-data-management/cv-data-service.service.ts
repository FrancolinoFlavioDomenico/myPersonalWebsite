import { keyframes } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CvDataStructure } from 'src/app/objects-interfaces/cvData/cv-data-structure';

@Injectable()
export class CvDataServiceService {

  private _cvData!: Object;

  constructor(private httpClient: HttpClient) { }

  //public getCvData:

  /**
 * ottengo il json con i dati del cv
 */
  public getCvDataRequest() {
    /*fetch('http://localhost:4200/assets/cvData.json').then(res => res.json())
      .then(jsonData => {
        console.log(" getting data "+ JSON.stringify(jsonData));
        //let obj = JSON.parse(jsonData)
        //this.headerData = obj.headerData;
        // this.headerData = object.headerData;
      });*/

    //da modificare recuperando il file dal server
    //this._cvData =

   this.httpClient.get("assets/cvData.json").subscribe(
      (cvData: CvDataStructure) => {
       console.log(cvData: CV);
       return Promise.resolve();
      })

   console.log("cv data are" + this._cvData);

    //     console.log(cvData);
    //     return cvData
  }


  /*public get (): void{
   // debugger;
    //return this._cvData;
    this.getCvData();
  }*/
}
