import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule, MatTableModule } from "@angular/material";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";

import { CustomMaterialModule } from "../material.module";

import { JeuComponent } from "./jeu.component";
import { JeuGridComponent } from "./jeu-grid.component";
import { Puce } from "./puce";

@NgModule({
  declarations: [
    JeuComponent,
    JeuGridComponent,
    Puce
  ],
  exports: [
    JeuComponent,
    JeuGridComponent,
    Puce
  ],
  imports: [
    NoopAnimationsModule,
    CustomMaterialModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: []
})
export class JeuModule { }
