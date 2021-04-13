import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquetteSingleComponent } from './boquette-single/boquette-single.component';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';
import { BoquetteListComponent } from './boquette-list/boquette-list.component';
import { BoquetteCreateComponent } from './boquette-create/boquette-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoquetteRoutingModule } from './boquette-routing';



@NgModule({
  declarations: [
    BoquetteSingleComponent, 
    BoquetteSinglePageComponent, 
    BoquetteListComponent, 
    BoquetteCreateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoquetteRoutingModule
  ]
})
export class BoquetteModule { }
