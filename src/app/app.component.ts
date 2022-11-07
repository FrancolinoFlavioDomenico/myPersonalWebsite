import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'myPersonalWebsite';

  qualification1 = "laureando in informatica";
  qualification2 = "perito informatico";
  qualification = this.qualification1;

  private _cvData: any;
  headerData!: object;
  leftColumnData!: object;
  rightColumnData!: object;

  constructor(private httpClient: HttpClient) { }



  ngOnInit() {
    //this._cvData = this.getCvData();
    //this.headerData = this._cvData.headerData;
    //console.log(this.headerData);
    //this.getCvData();
    //console.log(this._cvData);
    this.changeQualification();
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

  /**
   * ottengo il file con i dati del cv
   */
  private async getCvData() {
    fetch('http://localhost:3080/cvData').then(res => res.json())
      .then(jsonData => {
        console.log(jsonData);
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
}
