import { Component, OnInit, Input } from '@angular/core';
import { Couleur } from './couleur';

@Component({
  selector: 'puce-component',
  templateUrl: './puce.component.html',
  styleUrls: ['./puce.component.css']
})

export class Puce implements OnInit {

  @Input() full:boolean;
  @Input() couleur: String;
  @Input() couleurOn: Couleur;
  @Input() couleurOff: Couleur;
  @Input() found: boolean;

  toggle(): void {
    if(this.found){
      this.untouch();
    } else {
      this.touch();
    }
  }

  touch(): void {
    this.couleur = Couleur[this.couleurOff];
    this.found = true;
  }

  untouch():void {
    this.couleur = Couleur[this.couleurOn];
    this.found = false;
  }

  setFull(full: boolean): void{
    this.full = full;
  }
  setCouleur(couleur: Couleur): void{
    this.couleur = Couleur[couleur];
  }
  setCouleurOn(couleur: Couleur): void{
    this.couleurOn = couleur;
  }
  setCouleurOff(couleur: Couleur): void{
    this.couleurOff = couleur;
  }
  setFound(found: boolean): void{
    this.found = found;
  }
  isFull(): boolean{
    return this.full;
  }
  getCouleur(): String{
    return this.couleur;
  }
  getCouleurOn(): Couleur{
    return this.couleurOn;
  }
  getCouleurOff(): Couleur{
    return this.couleurOff;
  }
  isFound(): boolean{
    return this.found;
  }

  constructor(){}

  ngOnInit(){}
}
