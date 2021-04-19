import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-rotance-single-page',
  templateUrl: './rotance-single-page.component.html',
  styleUrls: ['./rotance-single-page.component.css']
})
export class RotanceSinglePageComponent implements OnInit {

  public singleRotance : Rotance

  constructor(
    private boquette : BoquetteService,
    private rotance : RotanceService,
    private route : ActivatedRoute,
    private router : Router,
    private modal : ModalService
  ) { }

  ngOnInit(): void {
    let rotanceId = this.route.snapshot.params['id'];
    this.rotance.getById(rotanceId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.singleRotance = value;
      }
    })
  }

  onDelete(){
    this.modal.open('confirmation');
  }

  onCancel(){
    this.modal.close('confirmation');
  }

  onConfirm(){
    this.rotance.delete(this.singleRotance.getId())
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['boquette',this.singleRotance.boquette.getId()]);
      }
    })
  }

}
