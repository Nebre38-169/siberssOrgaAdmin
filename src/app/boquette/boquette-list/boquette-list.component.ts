import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';

@Component({
  selector: 'app-boquette-list',
  templateUrl: './boquette-list.component.html',
  styleUrls: ['./boquette-list.component.css']
})
export class BoquetteListComponent implements OnInit {
  public boquetteList : Boquette[];

  private boquetteSub : Subscription;
  constructor(private boquette : BoquetteService) { }

  ngOnInit(): void {
    this.boquetteSub = this.boquette.objectListObs.subscribe(
      value =>{
        this.boquetteList = value;
      }
    )
    this.boquette.fetch();
  }

}
