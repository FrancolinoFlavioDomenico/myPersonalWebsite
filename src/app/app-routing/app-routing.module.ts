import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CvGeneralViewComponent } from '../curriculum-component/cv-general-view.component';
import { ContactFormComponent } from '../contacts-component/contact-form/contact-form.component';


const routes: Routes = [
  {
    path: "", component: CvGeneralViewComponent, children:
      [
        { path: "contact-form", component: ContactFormComponent }
      ]
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
