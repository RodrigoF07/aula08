import { Component, OnInit } from '@angular/core';

import { Foto } from '../foto.model';
import { ServicoService } from 'src/app/shared/servico/servico.service';

@Component({
  selector: 'pho-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {

  //Array
imagens: Foto[] = [];

//Injeção de dependencia é quando solicitamos uma ferramenta.
//Toda injeção de dependencia deve ser feita no () do construtor 
//Toda ferramenta precisa de alguem para usa-la (ex: esse alguem é a variavel (http))
  constructor(private banco: ServicoService) { }

  ngOnInit(): void {
    this.banco.getPhoto().subscribe(caixa => this.imagens = caixa);
  }
  apagar(id: number){
    try{
      this.banco.delFoto(id);
      
    }finally{
      location.reload();
      alert("item excluido!");
    }
    
  }
}
