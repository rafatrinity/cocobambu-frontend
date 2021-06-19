import { Injectable } from '@angular/core';
import { Receita } from '../receitas/receita.model';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {}
  receita: Receita = new Receita();

  getReceita(): Receita {
    return this.receita;
  }
  setReceita(receita: Receita) {
    this.receita = receita;
  }
}
