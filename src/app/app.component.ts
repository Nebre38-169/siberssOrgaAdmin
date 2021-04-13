import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/other/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Siber\'ss orga Admin';

  constructor(private auth : AuthService,
    private router : Router){

  }
  ngOnInit(): void {
    if(!this.auth.isLogged()){
      this.router.navigate(['auth','login']);
    }
  }

}
