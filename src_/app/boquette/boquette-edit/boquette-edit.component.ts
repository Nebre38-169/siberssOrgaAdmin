import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';

@Component({
  selector: 'app-boquette-edit',
  templateUrl: './boquette-edit.component.html',
  styleUrls: ['./boquette-edit.component.css']
})
export class BoquetteEditComponent implements OnInit {

  editBoquetteForm : FormGroup;
  b : Boquette;

  constructor(
    private formBuilder : FormBuilder,
    private boquette : BoquetteService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.boquette.getById(id)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.b = value;
        this.initForm(this.b);
      }
    })
  }

  private initForm(b : Boquette){
    this.editBoquetteForm = this.formBuilder.group({
      name : [b.name,Validators.required],
      respo : [b.respo,Validators.required],
      description : [b.description],
      role : [b.role,Validators.required]
    })
  }

  onSubmitForm(){
    const formValue = this.editBoquetteForm.value;
    this.b.name = formValue['name'];
    this.b.respo = formValue['respo'];
    this.b.description = formValue['description'];
    this.b.role = formValue['role'];
    this.boquette.edit(this.b)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['boquette',this.b.getId()])
      }
    })
  }

}
