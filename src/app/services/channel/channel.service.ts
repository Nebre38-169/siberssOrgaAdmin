import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Channel } from 'src/app/class/channel/channel';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelService extends BaseService<Channel>{
  
  baseUrl = environment.baseUrl.base+environment.baseUrl.channel;

  constructor(
    protected http: HttpClient,
    protected router: Router
  ) {
    super(http,router);
   }

  public jsonToObjectConvert(info: any): Channel {
    return new Channel(
      parseInt(info.id),
      new Date(info.creationDate),
      new Date(info.updateDate),
      info.nom,
      info.boquettes
    )
  }
  public objectToJsonConvert(obj: Channel) {
    return {
      nom : obj.nom,
      boquettes : obj.boquettes
    }
  }
}
