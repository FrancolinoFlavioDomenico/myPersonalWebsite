import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CvDataServiceService {

  private _cvData!: Object;

  constructor(private httpClient: HttpClient) {}

    /**
   * ottengo il file con i dati del cv
   */
     public  cvDataRequest() {
      fetch('http://localhost:4200/assets/cvData.json').then(res => res.json())
        .then(jsonData => {
          console.log(" getting data "+ JSON.stringify(jsonData));
          //let obj = JSON.parse(jsonData)
          //this.headerData = obj.headerData;
          // this.headerData = object.headerData;
        });

      //da modificare recuperando il file dal server
      //     let cvData;
      //     this.httpClient.get("assets/cvData.json").subscribe(data => {

      //       console.log(JSON.parse(JSON.stringify(data)));
      // console.log(data.valueOf(headerData));
      //       /* console.log(data2.headerData)
      //       headDa = data2.headerData;
      //       this._cvData = data2 */

      //     })

      //     console.log(cvData);
      //     return cvData
    }


  /*public get (): void{
   // debugger;
    //return this._cvData;
    this.getCvData();
  }*/
}
