import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Professeur } from '../professeur';
import { ProfesseurServiceService } from '../professeur-service.service';

@Component({
  selector: 'app-details-professeur',
  templateUrl: './details-professeur.component.html',
  styleUrls: ['./details-professeur.component.css']
})
export class DetailsProfesseurComponent implements OnInit {

  professeur: Professeur|undefined

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private professeurService: ProfesseurServiceService
  ){}

  ngOnInit() {

    const idParams: string|null = this.route.snapshot.paramMap.get('id')
    if(idParams){
      this.professeur = this.professeurService.getProfessorById(+idParams)
    }
  }

  gotToProfesseur(){
    this.router.navigate(['/professeurs'])
  }

}
