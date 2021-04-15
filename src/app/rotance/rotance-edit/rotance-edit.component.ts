import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rotance } from 'src/app/class/boquette/rotance';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { RotanceService } from 'src/app/services/boquette/rotance.service';

@Component({
  selector: 'app-rotance-edit',
  templateUrl: './rotance-edit.component.html',
  styleUrls: ['./rotance-edit.component.css']
})
export class RotanceEditComponent implements OnInit {

  editRotanceForm : FormGroup;
  
  public singleRotance : Rotance;
  constructor(
    private formBuilder : FormBuilder,
    private boquette : BoquetteService,
    private rotance : RotanceService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    let rotanceId = this.route.snapshot.params['id'];
    this.rotance.getById(rotanceId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.singleRotance = value;
        this.initForm(this.singleRotance);
      }
    })
  }

  private initForm(r : Rotance){
    let date = `${r.date.getFullYear()}-`;
    if((r.date.getMonth()+1)<10){
      date += `0${r.date.getMonth()+1}`;
    } else {
      date +=`${r.date.getMonth()+1}`;
    }
    date+='-';
    if((r.date.getDate())<10){
      date += `0${r.date.getDate()}`;
    } else {
      date +=`${r.date.getDate()}`;
    }
    let hours = '';
    if((r.date.getHours())<10){
      hours += `0${r.date.getHours()}`;
    } else {
      hours +=`${r.date.getHours()}`;
    }
    hours+=':';
    if((r.date.getMinutes())<10){
      hours += `0${r.date.getMinutes()}`;
    } else {
      hours +=`${r.date.getMinutes()}`;
    }
    this.editRotanceForm = this.formBuilder.group({
      lieu : [r.lieu,Validators.required],
      info : [r.info],
      date : [date,Validators.required],
      time : [hours,Validators.required],
      commencer : [r.commencer]
    })
  }

  onSubmitForm(){
    const formValue = this.editRotanceForm.value;
    var newDate = new Date(formValue['date']+'T'+formValue['time']);
    this.singleRotance.lieu = formValue['lieu'];
    this.singleRotance.info = formValue['info'];
    this.singleRotance.commencer = formValue['commencer'];
    this.singleRotance.date = newDate;
    this.rotance.edit(this.singleRotance)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['boquette',this.singleRotance.boquette.getId()]);
      }
    })
  }
}
