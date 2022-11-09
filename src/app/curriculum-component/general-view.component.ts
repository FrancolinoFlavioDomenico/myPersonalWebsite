import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.sass']
})
export class GeneralViewComponent implements OnInit {

  qualification1 = "laureando in informatica";
  qualification2 = "perito informatico";
  qualification = this.qualification1;

  constructor() { }



  ngOnInit() {
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
