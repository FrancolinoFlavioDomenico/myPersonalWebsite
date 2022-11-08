import { Injectable } from '@angular/core';
import { LeftColumnData } from './left-column-data';

@Injectable({
  providedIn: 'root',
})
export class LeftColumnDataService {


  constructor() {}

  public getLeftColumnData (){
    console.log("servie column left : "+ LeftColumnData);
    return LeftColumnData.getAllData();
  }

}
