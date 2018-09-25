import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Puce } from './puce';
import { Couleur } from './couleur';

@Component({
  selector: 'jeu-grid',
  templateUrl: './jeu-grid.component.html',
  styleUrls: ['./jeu-grid.component.css']
})

export class JeuGridComponent implements OnInit {

  @Input() tableau: Puce[][];
  /*
  innerTableau: Puce[][];
  @Output() tableauChange = new EventEmitter();
*/
  constructor(){
    this.tableau = new Array();
  }

  ngOnInit(){}
/*
  @Input()
  get tableau() : Puce[][] {
    return this.innerTableau;
  }

  set tableau(tab: Puce[][]) {
    this.innerTableau = tab;
    this.tableauChange.emit(this.innerTableau);
  }
*/
}
