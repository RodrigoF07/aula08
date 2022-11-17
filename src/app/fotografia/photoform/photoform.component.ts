import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pho-photoform',
  templateUrl: './photoform.component.html',
  styleUrls: ['./photoform.component.css']
})
export class PhotoformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  //Metodo de cadastro
cadastrar(form: any){
  console.log(form.value);
  }

}
