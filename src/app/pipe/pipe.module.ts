import { NgModule } from '@angular/core';
import { DateFrPipe } from './date-fr.pipe';



@NgModule({
  declarations: [
    DateFrPipe
  ],
  imports: [
  ],
  exports : [
    DateFrPipe
  ]
})
export class PipeModule { 
  static forRoot() {
    return {
        ngModule: PipeModule,
        providers: [],
    };
 }
}
