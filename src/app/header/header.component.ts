import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pho-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  img = "https://i.ytimg.com/vi/01COCwp9ucQ/maxresdefault.jpg";

  constructor() { }

  ngOnInit(): void {
  }

}
