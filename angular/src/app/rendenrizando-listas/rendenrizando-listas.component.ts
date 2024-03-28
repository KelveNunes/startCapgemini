import { Component, OnInit } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-rendenrizando-listas',
  templateUrl: './rendenrizando-listas.component.html',
  styleUrls: ['./rendenrizando-listas.component.css']
})
export class RendenrizandoListasComponent  {

  celulares: Celular[]= [
    {id: 1, nome: 'Samsung Galaxy S10', descricao: 'Samsung Galaxy S10 128GB', esgotado: false},
    {id: 2, nome: 'Samsung Galaxy S20', descricao: 'Samsung Galaxy S20 128GB', esgotado: true},
  ]

}
