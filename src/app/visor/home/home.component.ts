import { Component, OnInit } from '@angular/core';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  faLeaf = faLeaf;
  constructor() {
    //hacer algo.
  }

  ngOnInit() {
    console.log('inicio');
  }

}
