import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { PreparoComponent } from './preparo/preparo.component';
import { ReceitasComponent } from './receitas/receitas.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
    canActivate:[AuthGuardService],
    path:"receitas",
    component: ReceitasComponent
  },
  {
    canActivate:[AuthGuardService],
    path:"preparo",
    component: PreparoComponent
  },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
