import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoquetteSingleComponent } from './boquette-single/boquette-single.component';
import { BoquetteSinglePageComponent } from './boquette-single-page/boquette-single-page.component';
import { BoquetteListComponent } from './boquette-list/boquette-list.component';
import { BoquetteCreateComponent } from './boquette-create/boquette-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoquetteRoutingModule } from './boquette-routing';
import { BoquetteEditComponent } from './boquette-edit/boquette-edit.component';
import { ModalModule } from '../_modal';
import { RotanceModule } from '../rotance/rotance.module';
import { BoquetteEditPasswordComponent } from './boquette-edit-password/boquette-edit-password.component';



@NgModule({
  declarations: [
    BoquetteSingleComponent, 
    BoquetteSinglePageComponent, 
    BoquetteListComponent, 
    BoquetteCreateComponent, 
    BoquetteEditComponent, BoquetteEditPasswordComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    BoquetteRoutingModule,
    RotanceModule
  ]
})
export class BoquetteModule { }
