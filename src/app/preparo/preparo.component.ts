import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Receita } from '../receitas/receita.model';
import { SharedService } from '../shared/shared.service';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-preparo',
  templateUrl: './preparo.component.html',
  styleUrls: ['./preparo.component.scss'],
})
export class PreparoComponent implements OnInit {
  constructor(
    private SS: SharedService
  ) {}
  assets = environment.assets;
  receita: Receita = new Receita();
  ngOnInit(): void {
    this.receita = this.SS.getReceita();
  }

}
