import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent  {
  nome = "KELVE";
  dataNasciemnto = "1995-04-12";
  urlImagem = "assets/eufoto.jpg";
  mostrarDataNascimento() {
    alert(`a data de nascimento é: ${this.dataNasciemnto}`)
  }

}
