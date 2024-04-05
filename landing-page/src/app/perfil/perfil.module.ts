import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatoComponent } from './contato/contato.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';



@NgModule({
  declarations: [
    ContatoComponent,
    ExperienciaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PerfilModule { }
