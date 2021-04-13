import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquetteSingleComponent } from './boquette-single/boquette-single.component';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';
import { BoquetteListComponent } from './boquette-list/boquette-list.component';
import { BoquetteCreateComponent } from './boquette-create/boquette-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoquetteRoutingModule } from './boquette-routing';
import { BoquetteEditComponent } from './boquette-edit/boquette-edit.component';



@NgModule({
  declarations: [
    BoquetteSingleComponent, 
    BoquetteSinglePageComponent, 
    BoquetteListComponent, 
    BoquetteCreateComponent, 
    BoquetteEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BoquetteRoutingModule
  ]
})
export class BoquetteModule { }
