import { Component, Input, OnInit } from '@angular/core';
import { Rotance } from 'src/app/class/boquette/rotance';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-rotance-single',
  templateUrl: './rotance-single.component.html',
  styleUrls: ['./rotance-single.component.css']
})
export class RotanceSingleComponent implements OnInit {

  @Input() rotance : Rotance

  public encours : string

  constructor() { }

  ngOnInit(): void {
    if(this.rotance.commencer && !this.rotance.fini){
      this.encours = "Oui";
    } else if(this.rotance.commencer && this.rotance.fini) {
      this.encours = "Rotance terminer";
    } else {
      this.encours = "Non";
    }
  }

}
