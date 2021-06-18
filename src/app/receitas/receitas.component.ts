import { Component, OnInit } from '@angular/core';
import { Receita } from './receita.model';
import { ReceitasService } from './receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent implements OnInit {
  receitas: Receita[] = [];
  constructor(private RS: ReceitasService) { }

  ngOnInit(): void {
    this.obterReceitas();
  }

  obterReceitas(){
    this.RS.getAll().subscribe((receitas: Receita[])=>{
      this.receitas=receitas;
      console.log(receitas);
      
    });
  }

}
