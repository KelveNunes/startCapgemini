import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-servico2',
  templateUrl: './servico2.component.html',
  styleUrls: ['./servico2.component.css']
})
export class Servico2Component  {
  descricao: string = '';
  constructor(private logger: LoggerService) { }

  adicionarDescricao(){
    this.logger.logar("Adcionado a descrição: " + this.descricao);
  }
}
  


