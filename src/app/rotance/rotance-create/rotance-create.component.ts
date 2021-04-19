import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-rotance-create',
  templateUrl: './rotance-create.component.html',
  styleUrls: ['./rotance-create.component.css']
})
export class RotanceCreateComponent implements OnInit {

  newRotanceForm : FormGroup;

  public boquette : Boquette;

  constructor(
    private formBuilder : FormBuilder,
    private rotance : RotanceService,
    private boquetteService : BoquetteService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    let boquetteId = this.route.snapshot.params['boquette'];
    this.boquetteService.getById(boquetteId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.boquette = value;
      }
    })
    this.initForm();
  }

  private initForm(){
    this.newRotanceForm = this.formBuilder.group({
      lieu : ['',Validators.required],
      info : [''],
      date : ['',Validators.required],
      time : ['',Validators.required],
      commencer : ['']
    })
  }

  onSubmitForm(){
    const formValue = this.newRotanceForm.value;
    var newDate = new Date(formValue['date']+'T'+formValue['time']);
    console.log(newDate);
    var newRotance = new Rotance(
      undefined,
      undefined,
      undefined,
      this.boquette,
      formValue['lieu'],
      formValue['info'],
      newDate,
      formValue['commencer'],
      'N'
    )
    this.rotance.createNew(newRotance)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['boquette',this.boquette.getId()])
      }
    })
  }

}
