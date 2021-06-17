import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { PreparoComponent } from './preparo/preparo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReceitasComponent,
    PreparoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
