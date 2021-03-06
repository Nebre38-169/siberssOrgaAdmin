import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RotanceSingleComponent } from './rotance-single/rotance-single.component';
import { RotanceSinglePageComponent } from './rotance-single-page/rotance-single-page.component';
import { RotanceCreateComponent } from './rotance-create/rotance-create.component';
import { RotanceEditComponent } from './rotance-edit/rotance-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RotanceRoutingModule } from './rotance-routing';
import { ModalModule } from '../_modal';
import { PipeModule } from '../pipe/pipe.module';



@NgModule({
  declarations: [
    RotanceSingleComponent, 
    RotanceSinglePageComponent, 
    RotanceCreateComponent, 
    RotanceEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    ReactiveFormsModule,
    RotanceRoutingModule,
    PipeModule.forRoot()
  ],
  exports : [
    RotanceSingleComponent
  ]
})
export class RotanceModule { }
