import { Injectable, InjectionToken } from '@angular/core';
import { LeftColumnData } from './left-column-data';



@Injectable()
export class LeftColumnDataService {


  constructor(private _leftColumnData: LeftColumnData) {}

  public getLeftColumnData (){
    //console.log("servie column left : "+ LeftColumnData);
    return this._leftColumnData
  }

}
