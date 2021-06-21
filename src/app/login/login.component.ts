import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

export class Credentials{
  user: string = '';
  pass: string = '';
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {
  public formCredentials: any;

  constructor(private router: Router) { }
  createForm(credentials: Credentials){
    this.formCredentials = new FormGroup({
      user: new FormControl(credentials.user),
      pass: new FormControl(credentials.pass),
    });
  }

  assets = environment.assets;
  ngOnInit(): void {
    this.createForm(new Credentials())
  }


  validateLogin(){
    if(this.formCredentials.value.user == 'testeusername' && this.formCredentials.value.pass == 'testesenha'){
      localStorage.setItem('isAuthenticated', 'true');
      this.router.navigate(['receitas']);
    }    
  }

}
