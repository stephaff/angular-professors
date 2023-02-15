import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Professeur } from '../professeur';
import { ProfesseurServiceService } from '../professeur-service.service';

@Component({
  selector: 'app-list-professeurs',
  templateUrl: './list-professeurs.component.html',
  styleUrls: ['./list-professeurs.component.css']
})
export class ListProfesseursComponent implements OnInit {
  
  professeurs: Professeur[]

  constructor(
    private professeurService: ProfesseurServiceService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.professeurs = this.professeurService.getProfessorList()
  }

  goToProfesseur(professeur: Professeur){
    this.router.navigate(['/professeur', professeur.id])
  }

}
