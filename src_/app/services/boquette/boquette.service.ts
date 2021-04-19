import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Boquette } from 'src/app/class/boquette/boquette';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class BoquetteService extends BaseService<Boquette> {
  
  baseUrl = environment.baseUrl.base+environment.baseUrl.boquette;

  constructor(protected http : HttpClient) {
    super(http);
   }

  public jsonToObjectConvert(info: any): Boquette {
    return new Boquette(
      parseInt(info.id),
      new Date(info.creationDate),
      new Date(info.updateDate),
      info.name,
      info.respo,
      info.description,
      info.role
    );
  }
  public objectToJsonConvert(obj: Boquette) {
    return {
      name : obj.name,
      respo : obj.respo,
      description : obj.description.normalize(),
      role : obj.role
    }
  }
}
