import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Base } from 'src/app/class/base/base';
import { Header } from 'src/app/class/header/header';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseWithDependanceService<T extends Base> extends BaseService<T> {

  constructor(
    protected http : HttpClient,
    protected route: Router,
  ) {
    super(http,route);
   }

  public fetchForDependance(id : number,dependance : string) : void{
    this.http.get<ServeurResponse>(
      this.baseUrl+`/dependance/${dependance}/${id}`,
      { 
        headers : Header.getHeader() 
      }
    ).subscribe(
      value =>{
        this.objectList = [];
        if(value.status==='success'){
          for(let info of value.result){
            this.objectList.push(this.jsonToObjectConvert(info));
          }
        }else{
          if(value.result.includes('internal error')){
            this.errorRedirect();
          } else {
            return new Error(value.result);
          }
        }
        this.update();
      }
    )
  }

  public getByDependance(id : number,dependance : string) : Observable<T[] | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/dependance/${dependance}/${id}`,
      { 
        headers : Header.getHeader() 
      }
    )
    .pipe(
      map(value=>{
        if(value.status==='success'){
          let result : T[] = [];
          for(let info of value.result){
            result.push(this.jsonToObjectConvert(info));
          }
          return result;
        } else {
          if(value.result.includes('internal error')){
            this.errorRedirect();
          } else {
            return new Error(value.result);
          }
        }
      })
    )
  }

  public deleteByDependance(id : number, dependance : string) : Observable<boolean | Error>{
    return this.http.delete<ServeurResponse>(
      this.baseUrl+`/${dependance}/${id}`,
      { 
        headers : Header.getHeader() 
      }
    )
    .pipe(
      map(value =>{
        if(value.status==='success'){
          return true;
        } else {
          if(value.result.includes('internal error')){
            this.errorRedirect();
          } else {
            return new Error(value.result);
          }
        }
      })
    )
  }
}