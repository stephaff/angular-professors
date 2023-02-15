import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProfesseursComponent } from './list-professeurs/list-professeurs.component';
import { DetailsProfesseurComponent } from './details-professeur/details-professeur.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfesseurServiceService } from './professeur-service.service';

const professeurRoutes: Routes = [
  {path:'professeurs', component: ListProfesseursComponent},
  {path:'professeur/:id', component: DetailsProfesseurComponent}
  
];

@NgModule({
  declarations: [
    ListProfesseursComponent,
    DetailsProfesseurComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(professeurRoutes)
  ],
  providers: [ProfesseurServiceService]
})
export class ProfesseurModule { }
