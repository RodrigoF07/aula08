import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../foto.model';

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
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Foto[]>('http://localhost:3000/imagem').subscribe(caixa => this.imagens =caixa);
  }

}
