import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
