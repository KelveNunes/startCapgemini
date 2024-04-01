import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico1',
  templateUrl: './servico1.component.html',
  styleUrls: ['./servico1.component.css']
})
export class Servico1Component {

constructor(private logger: LoggerService) { }

  adicionarNome(nome: string){
  this.logger.logar(nome);
  }
}