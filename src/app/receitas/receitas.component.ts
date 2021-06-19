import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Receita } from './receita.model';
import { ReceitasService } from './receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss'],
})
export class ReceitasComponent implements OnInit {
  receitas: Receita[] = [];
  receitaCtrl = new FormControl();
  filteredReceitas: Observable<Receita[]>;

  constructor(private RS: ReceitasService, private router: Router) {
    this.filteredReceitas = this.receitaCtrl.valueChanges.pipe(
      startWith(''),
      map((receita) =>
        receita ? this._filterReceitas(receita) : this.receitas.slice()
      )
    );
  }

  ngOnInit(): void {
    this.obterReceitas();
  }

  obterReceitas() {
    this.RS.getAll().subscribe((receitas: Receita[]) => {
      this.receitas = receitas;
    });
  }

  logOut(){
    localStorage.setItem('isAuthenticated', 'false');
    this.router.navigate(['login']);
  }

  private _filterReceitas(value: string): Receita[] {
    const filterValue = value.toLowerCase();
    return this.receitas.filter((receita) =>
      receita.nome.toLowerCase().includes(filterValue)
    );
  }
}
