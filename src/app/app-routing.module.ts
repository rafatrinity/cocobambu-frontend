import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PreparoComponent } from './preparo/preparo.component';
import { ReceitasComponent } from './receitas/receitas.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"receitas",
    component: ReceitasComponent
  },
  {
    path:"preparo:id",
    component: PreparoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
