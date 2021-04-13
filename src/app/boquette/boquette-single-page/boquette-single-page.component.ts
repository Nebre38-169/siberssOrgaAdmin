import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';

@Component({
  selector: 'app-boquette-single-page',
  templateUrl: './boquette-single-page.component.html',
  styleUrls: ['./boquette-single-page.component.css']
})
export class BoquetteSinglePageComponent implements OnInit {

  public singleBoquette : Boquette;

  constructor(
    private boquette : BoquetteService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let boquetteId = this.route.snapshot.params['id'];
    this.boquette.getById(boquetteId).subscribe(
      value =>{
        if(value instanceof Error){
          console.log(value); 
        } else {
          this.singleBoquette = value;
        }
      }
    )
  }

  onDelete(){
    //TODO : add a delete method with modal confirmation
  }

}
