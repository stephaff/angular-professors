import { Injectable } from '@angular/core';
import { Professeur } from './professeur';
import { LIST_PROFESSEUR } from './professeurs-list';


@Injectable()
export class ProfesseurServiceService {

  getProfessorList(){
    return LIST_PROFESSEUR;
  }

  getProfessorById(professorId: number):Professeur|undefined {
    return LIST_PROFESSEUR.find(professor => professor.id == professorId)
  }

}
