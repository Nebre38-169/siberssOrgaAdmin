import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { ServeurResponse } from 'src/app/class/serveur-response/serveur-response';
import { environment } from 'src/environments/environment';
import { BoquetteService } from '../boquette/boquette.service';
import * as CryptoJS from 'crypto-js';
import  Base64  from 'crypto-js/enc-base64'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedAdmin : Boquette;
  public admin : Subject<Boquette> = new Subject<Boquette>();

  constructor(
    private http : HttpClient,
    private boquette : BoquetteService
  ) { }


  public login(boquette : string, password : string) : Observable<Boquette | Error>{
    return this.http.post<ServeurResponse>(
      environment.baseUrl.base+environment.baseUrl.auth+`/login`,
      {'boquette':boquette,'password' : this.getCryptedPass(password)}
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          this.loggedAdmin = this.boquette.jsonToObjectConvert(value.result.user);
          this.updateUser();
          localStorage.setItem('access_token',value.result.token);
          this.updateUser();
          return this.loggedAdmin;
        } else {
          return new Error(value.result);
        }
      })
    )
  }

  public logout() : Observable<boolean | Error>{
    return this.http.get<ServeurResponse>(
      environment.baseUrl.base+environment.baseUrl.auth+`/logout/${this.loggedAdmin.getId()}`
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          this.loggedAdmin = null;
          this.updateUser();
          return true;
        } else {
          return new Error(value.result);
        }
      })
    )
  }

  public sigin(boquette : Boquette, password : string) : Observable<Boquette | Error>{
    return this.http.post<ServeurResponse>(
      environment.baseUrl.base+environment.baseUrl.auth+`/signin`,
      {
        'name' : boquette.name,
        'password' : this.getCryptedPass(password),
        'respo' : boquette.respo,
        'description' : boquette.description,
        'role' : boquette.role
      }
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          boquette.setId(value.result);
          return boquette;
        } else {
          return new Error(value.result);
        }
      })
    )
  }

  public updatePassword(boquette : Boquette,newPassword) : Observable<boolean | Error>{
    let cryptedPass = this.getCryptedPass(newPassword);
    return this.http.post<ServeurResponse>(
      environment.baseUrl.base+environment.baseUrl.auth+`/editpassword/${boquette.getId()}`,
      {newPassword : cryptedPass}
    ).pipe(
      map(value =>{
        if(value.status==='success'){
          return true;
        } else {
          return new Error(value.result);
        }
      })
    )
  }

  public getUser() : Boquette {
    return this.loggedAdmin;
  }

  public getId() : number {
    if(this.loggedAdmin){
      return this.loggedAdmin.getId();
    } else {
      return null
    }
  }

  public isLogged() : boolean {
    return this.loggedAdmin!=undefined;
  }

  public isAdmin() : boolean {
    if(this.loggedAdmin){
      return this.loggedAdmin.role==='admin';
    } else {
      return false;
    }
  }


  public updateUser(){
    this.admin.next(this.loggedAdmin);
  }

  private getCryptedPass(pass : string) : string {
    let hash = CryptoJS.SHA256(pass);
    let cryptedPassword = Base64.stringify(hash)
    if(!environment.production){
      console.log(cryptedPassword);
    }
    return cryptedPassword;
  }
}
