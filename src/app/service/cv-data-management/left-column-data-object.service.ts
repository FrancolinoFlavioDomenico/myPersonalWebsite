import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeftColumnDataObjectService {

  private _profileSection = {
    "title": "Profilo",
    "body": "diplomato in istutio tecnico ecc ecc"
  };



  private _interestSection = {
    "title": "Interessi",
    "body": ["kick", "musica eletronica"]
  };



  private _contactSection = {
    "title": "Contatti",
    "body": [
      { "email": "franolinoflavio@gmail.com" },
      { "numero": "3333333333333" },
      { "indrizzio": "via de amicis 4" }
    ]
  };


  constructor() { }

  public get profileSection() {
    return this._profileSection;
  }
  public set profileSection(value) {
    this._profileSection = value;
  }


  public get interestSection() {
    return this._interestSection;
  }
  public set interestSection(value) {
    this._interestSection = value;
  }

  public get contactSection() {
    return this._contactSection;
  }
  public set contactSection(value) {
    this._contactSection = value;
  }
}
