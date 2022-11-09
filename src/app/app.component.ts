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
}
