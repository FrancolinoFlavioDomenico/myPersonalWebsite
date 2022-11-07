import { Injectable } from '@angular/core';
import { LeftColumnDataObjectService } from './left-column-data-object.service';

@Injectable({
  providedIn: 'root'
})
export class LeftColumnDataProviderService {


  constructor(private _leftColumnDataObject: LeftColumnDataObjectService) {}

  public get leftColumnDataObject (){
    return this._leftColumnDataObject;
  }

}
