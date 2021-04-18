import { Component, Input, OnInit } from '@angular/core';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-boquette-single',
  templateUrl: './boquette-single.component.html',
  styleUrls: ['./boquette-single.component.css']
})
export class BoquetteSingleComponent implements OnInit {
  @Input() boquette : Boquette;
  public nextRotance : Rotance;

  constructor(
    private rotance : RotanceService
  ) { }

  ngOnInit(): void {
    this.rotance.getNextRotance(this.boquette)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.nextRotance = value;
      }
    });
  }

}
