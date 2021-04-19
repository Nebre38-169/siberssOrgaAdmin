import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/other/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title = 'Siber\'ss orga Admin';

  public logged = false;

  private authSub : Subscription;
  constructor(
    private auth : AuthService,
    private router : Router
  ){
  }

  ngOnDestroy(): void {
    this.authSub.unsubscribe();
  }
  ngOnInit(): void {
    this.authSub = this.auth.admin.subscribe(
      value =>{
        if(value){
          this.logged = true;
        } else {
          this.logged = false;
        }
      }
    )
  }

  onClick(){
    this.auth.logout()
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['auth','login']);
      }
    })
  }

}
