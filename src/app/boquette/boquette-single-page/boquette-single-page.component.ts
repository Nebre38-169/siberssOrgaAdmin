import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-boquette-single-page',
  templateUrl: './boquette-single-page.component.html',
  styleUrls: ['./boquette-single-page.component.css']
})
export class BoquetteSinglePageComponent implements OnInit {

  public singleBoquette : Boquette;
  public rotanceList : Rotance[];

  constructor(
    private boquette : BoquetteService,
    private rotance : RotanceService,
    private route : ActivatedRoute,
    private router : Router,
    private modal : ModalService
  ) { }

  ngOnInit(): void {
    let boquetteId = this.route.snapshot.params['id'];
    this.boquette.getById(boquetteId).subscribe(
      value =>{
        if(value instanceof Error){
          console.log(value); 
        } else {
          this.singleBoquette = value;
          this.rotance.getByDependance(boquetteId,'boquette')
          .subscribe(value =>{
            if(value instanceof Error){
              console.log(value);
            } else {
              this.rotanceList = value;
            }
          })
        }
      }
    )
  }

  onDelete(){
    this.modal.open('confirmation');
  }

  closeModal(id :string){
    this.modal.close('confirmation');
  }

  confirm(){
    this.boquette.delete(this.singleBoquette.getId())
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.modal.close('confirmation');
        this.router.navigate(['boquette','list']);
      }
    })
  }


}
