import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  logo = '../../assets/weblogo.PNG';
  constructor() { }

  ngOnInit(): void {
  }

}
