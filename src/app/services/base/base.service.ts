import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { map } from 'rxjs/operators';
import { Base } from 'src/app/class/base/base';
import { Observable, Subject } from 'rxjs';
import { Header } from 'src/app/class/header/header';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService<T extends Base> {
  protected baseUrl : string;
  protected objectList : T[];
  public objectListObs : Subject<T[]> = new Subject<T[]>();

  constructor(
    protected http: HttpClient,
    protected router: Router
  ) { }

  public fetch(): void {
    this.http.get<ServeurResponse>(this.baseUrl,{ headers : Header.getHeader() }).subscribe(
      value =>{
        this.objectList = [];
        if(value.status==='success'){
          for(let info of value.result){
            this.objectList.push(this.jsonToObjectConvert(info));
          }
        } else {
          if(value.result.includes('internal error')){
            this.errorRedirect();
          }
        }
        this.update();
      }
    )
  }

  public getCondition(condition : string,param='*', opts='*') : Observable<T[] | Error>{
    return this.http.post<ServeurResponse>(this.baseUrl+`/condition`,
    {
      condition : condition,
      param : param,
      option : opts
    },
    { 
      headers : Header.getHeader() 
    }
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          let result : T[] = [];
          for(let info of value.result){
            result.push(this.jsonToObjectConvert(info));
          }
          return result;
        }else {
          if(value.result.includes('internal error')){
            this.errorRedirect();
          } else {
            return new Error(value.result);
          }
        }
      })
    )
  }

  public getById(id : number) : Observable<T | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/id/${id}`,
      { 
        headers : Header.getHeader() 
      }
      ).pipe(
      map(value =>{
        if(value.status==='success'){
          return this.jsonToObjectConvert(value.result);
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

  public getByKey(key : any) : Observable<T | Error>{
    return this.http.get<ServeurResponse>(
      this.baseUrl+`/key/${key}`,
      { 
        headers : Header.getHeader() 
      }
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          return this.jsonToObjectConvert(value.result);
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

  public createNew(newObject : T) : Observable< T | Error>{
    return this.http.post<ServeurResponse>(
      this.baseUrl,
      this.objectToJsonConvert(newObject),
      { 
        headers : Header.getHeader() 
      }
    )
    .pipe(
      map(value =>{
        if(value.status==='success'){
          newObject.setId(value.result);
          return newObject;
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

  public edit(updatedObject : T) : Observable<T | Error>{
    return this.http.put<ServeurResponse>(
      this.baseUrl+`/${updatedObject.getId()}`,
      this.objectToJsonConvert(updatedObject),
      { 
        headers : Header.getHeader() 
      }
    )
    .pipe(
      map(value =>{
        if(value.status==='success'){
          return updatedObject;
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

  public delete(id : number) : Observable<boolean | Error>{
    return this.http.delete<ServeurResponse>(
      this.baseUrl+`/${id}`,
      { 
        headers : Header.getHeader() 
      }
    ).pipe(
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

  public searchOn(id : number) : T{
    let i = 0;
    while(i<this.objectList.length && id!=this.objectList[i].getId()){
      i++;
    }
    if(i<this.objectList.length){
      return this.objectList[i];
    } else {
      return null;
    }
  }

  protected errorRedirect(){
    this.router.navigate(['error']);
  }

  protected update(){
    this.objectListObs.next(this.objectList);
  }

  public abstract jsonToObjectConvert(info : any) : T;
  public abstract objectToJsonConvert(obj : T) : any; 

}