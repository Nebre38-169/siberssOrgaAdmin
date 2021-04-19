import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { environment } from 'src/environments/environment';
import { BaseWithDependanceService } from '../base/base-with-dependance.service';
import { BaseService } from '../base/base.service';
import { BoquetteService } from './boquette.service';

@Injectable({
  providedIn: 'root'
})
export class RotanceService extends BaseWithDependanceService<Rotance> {
  
  baseUrl = environment.baseUrl.base+environment.baseUrl.rotance;
  constructor(protected http : HttpClient,
    private boquette : BoquetteService) {
    super(http);
    boquette.fetch();
   }

  public jsonToObjectConvert(info: any): Rotance {
    return new Rotance(
      parseInt(info.id),
      new Date(info.creationDate),
      new Date(info.updateDate),
      this.boquette.searchOn(parseInt(info.boquette)),
      info.lieu,
      info.info,
      new Date(info.date),
      info.commencer,
      info.fini
    )
  }
  public objectToJsonConvert(obj: Rotance) {
    return {
      boquette : obj.boquette.getId(),
      lieu : obj.lieu,
      info : obj.info,
      date : obj.date.toISOString(),
      commencer : (obj.commencer) ? 'Y' : 'N', 
      fini : (obj.fini) ? 'Y' : 'N'
    }
  }

  public getNextRotance(b : Boquette) : Observable<Rotance | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/next/${b.getId()}`
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          if(value.result.length>0){
            return this.jsonToObjectConvert(value.result[0]);
          } else {
            return null;
          }
        } else {
          return new Error(value.result);
        }
      })
    )
  }
}
