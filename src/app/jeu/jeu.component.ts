import { Component, OnInit } from '@angular/core';
import { JeuGridComponent } from './jeu-grid.component';
import { Puce } from './puce';
import { Couleur } from './couleur';

@Component({
  selector: 'jeu-component',
  templateUrl: './jeu.component.html',
  styleUrls: ['./jeu.component.css']
})

export class JeuComponent implements OnInit {
  puces: Puce[];
  level: number;
  nombreMaxPuces: number;
  nombrePucesACliquer: number;
  couleurRecherchee: Couleur;
  pret: boolean;
  hauteur: number;
  largeur: number;
  size: number = 10;

  keys = Object.keys(Couleur);

  tableau: Puce[][];

  constructor() {
    this.puces = [];
    this.nombreMaxPuces = 0;
    this.nombrePucesACliquer = 0;
    this.pret = false;

    this.hauteur = 50;
    this.largeur = 50;

    this.tableau = new Array();
  }

  ngOnInit(){
    //this.creerTableau(7);
  }

  generateRandomNumber(min: number, max: number) {
    // Returns a random integer between min (include) and max (include)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  creerTableau(level: number): void {

    this.hauteur = 50;
    this.largeur = 50;

    this.level = level;
    this.nombreMaxPuces = (level*(level-1))+1;
    this.nombrePucesACliquer = level;

    let generatedRandomNumber: number = this.generateRandomNumber(0, this.keys.length-1);
    this.couleurRecherchee = this.keys[generatedRandomNumber] != 'grey' ? Couleur[this
    .keys[generatedRandomNumber]] : Couleur[this.keys[(generatedRandomNumber - this.generateRandomNumber(1, 3))]];

    this.puces = [];
    this.tableau = new Array(this.size); //size*size??
    let indexPuces = 0;

    for(var i = 0;i<this.size;i++) {
      this.tableau[i] = [];
      for(var j=0;j<this.size;j++){
       //if(this.tableau[i][j]==undefined){
        let emptyPuce: Puce = new Puce();
        emptyPuce.setFound(false);
        emptyPuce.setFull(false);
        this.tableau[i][j] = emptyPuce;
       //}
      }
    }

    this.buildFullPuces();
    do{
      let generatedIndexRow: number = this.generateRandomNumber(0, this.size-1);
      let generatedIndexColumn: number = this.generateRandomNumber(0, this.size-1);
      //if(this.tableau[generatedIndexRow][generatedIndexColumn]==undefined){
        this.tableau[generatedIndexRow][generatedIndexColumn] = this.puces[indexPuces];
        indexPuces++;
      //}
    } while (indexPuces!=this.puces.length);



    this.pret = true;
  }

  isJeuTermine(): boolean {
    for(var i = 0;i<this.puces.length;i++) {
       if(this.couleurRecherchee==this.puces[i].getCouleurOn() && !this.puces[i].isFound()){
        return false;
       }
    }
    return true;
  }

  reset(): void {
    this.pret = false;
  }

  buildFullPuces(): void{

    for(var i=0; i<this.nombrePucesACliquer; i++){
      let puce: Puce = new Puce();
      puce.setFound(false);
      puce.setFull(true);
      puce.setCouleurOff(Couleur['grey']);
      puce.setCouleur(this.couleurRecherchee);
      puce.setCouleurOn(this.couleurRecherchee);
      this.puces.push(puce);
    }
    for(var i=this.nombrePucesACliquer; i<this.nombreMaxPuces; i++){
      let puce: Puce = new Puce();
      puce.setFound(false);
      puce.setFull(true);
      puce.setCouleurOff(Couleur['grey']);
      let randomIndexColor: number = this.generateRandomNumber(0, this.keys.length-1);
      let couleur: Couleur = Couleur[this.keys[randomIndexColor]] == this.couleurRecherchee ? Couleur[this
      .keys[randomIndexColor + 1 <
      this
      .keys.length ? randomIndexColor + 1 : randomIndexColor -1]] : Couleur[this.keys[randomIndexColor]];
      puce.setCouleur(couleur);
      puce.setCouleurOn(couleur);
      this.puces.push(puce);
    }
  }

  toggle(puce: Puce): void {
    //puce.found = !puce.found;
    if(puce.isFound()){
      this.untouch(puce);
    } else {
      this.touch(puce);
    }
    if(this.isJeuTermine()){
      this.reset();
    }
  }

  touch(puce: Puce): void {
    puce.setCouleur(puce.getCouleurOff());
    puce.setFound(true);
  }

  untouch(puce: Puce):void {
    puce.setCouleur(puce.getCouleurOn());
    puce.setFound(false);
  }
}
