import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  mensagens: string[] = [];

  logar(msg: string){
    console.log(msg);
    this.mensagens.push(msg);
  }

  exibirLogs(){
    console.log('Exibindo logs...');
    console.log(this.mensagens);
  }
}
