import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pho-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  //Inbound property
  
  @Input() imagem = "";
  

  constructor() { }

  ngOnInit(): void {
  }

  

}


