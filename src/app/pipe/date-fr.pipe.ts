import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFr'
})
export class DateFrPipe implements PipeTransform {

  private monthFrStr = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Aout',
    'Septembre',
    'Octobre',
    'Novembre',
    'Decembre'
  ]

  private dayFrStr = [
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche'
  ]

  transform(value: Date, ...args: unknown[]): string {
    let date = `${this.dayFrStr[value.getDay()]} ${value.getDate()} ${this.monthFrStr[value.getMonth()]} ${value.getFullYear()}`;
    let hour = `${value.getHours()}:${value.getMinutes()}`;
    let result ="";
    if(args.includes('full')){
      result = date + ' à ' + hour;
    } else if(args.includes('hours')){
      result = hour;
    } else {
      result = date;
    }
    return result;
  }

}
