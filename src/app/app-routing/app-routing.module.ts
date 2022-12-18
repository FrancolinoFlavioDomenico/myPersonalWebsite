import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CurriculumModule } from '../curriculum/cv-curriculum-component.module';
import { ContactFormComponent } from '../contacts-component/contact-form/contact-form.component';


const routes: Routes = [
  {
    path: "", component: CurriculumModule, children:
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
