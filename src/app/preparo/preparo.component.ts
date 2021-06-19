import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Receita } from '../receitas/receita.model';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-preparo',
  templateUrl: './preparo.component.html',
  styleUrls: ['./preparo.component.scss'],
})
export class PreparoComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private SS: SharedService
  ) {}
  receita: Receita = new Receita();
  ngOnInit(): void {
    this.receita = this.SS.getReceita();
    alert(this.receita.nome);
  }
}
