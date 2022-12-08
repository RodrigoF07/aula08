import { Component, OnInit } from '@angular/core';
import { ServicoService } from 'src/app/shared/servico/servico.service';

@Component({
  selector: 'pho-photoform',
  templateUrl: './photoform.component.html',
  styleUrls: ['./photoform.component.css']
})
export class PhotoformComponent implements OnInit {

  constructor(
private servico: ServicoService

  ) { }

  ngOnInit(): void {
  }


  
cadastrar(form: any){

  
  console.log(form.value);
  this.servico.postFoto(form);
  
  }

}
