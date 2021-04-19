import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Posts } from 'src/app/class/channel/posts';
import { environment } from 'src/environments/environment';
import { BaseWithDependanceService } from '../base/base-with-dependance.service';
import { BaseService } from '../base/base.service';
import { BoquetteService } from '../boquette/boquette.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService extends BaseWithDependanceService<Posts>{
  
  baseUrl = environment.baseUrl.base + environment.baseUrl.posts;
  
  constructor(protected http: HttpClient,
    private boquette : BoquetteService) { 
      super(http);
      boquette.fetch();
    }

  public jsonToObjectConvert(info: any): Posts {
    return new Posts(
      parseInt(info.id),
      new Date(info.creationDate),
      new Date(info.updateDate),
      info.titre,
      info.message,
      this.boquette.searchOn(parseInt(info.auteur))
    )
  }
  public objectToJsonConvert(obj: Posts) {
    return {
      titre : obj.titre,
      message : obj.message,
      auteur : obj.auteur.getId()
    }
  }

}
