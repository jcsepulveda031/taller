import { Component, OnInit } from '@angular/core';
import { Usuario } from './usuario';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.scss']
})
export class EstructuraComponent implements OnInit {

  usuario:Usuario;
  
  constructor(){
    this.usuario= new Usuario("","",0,0,"","","",0);
  }

  ngOnInit(): void {
  }

  onSubmit(){
   console.log(this.usuario)
  }

}
