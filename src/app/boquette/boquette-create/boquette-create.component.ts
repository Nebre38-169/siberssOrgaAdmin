import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { AuthService } from 'src/app/services/other/auth.service';

@Component({
  selector: 'app-boquette-create',
  templateUrl: './boquette-create.component.html',
  styleUrls: ['./boquette-create.component.css']
})
export class BoquetteCreateComponent implements OnInit {

  newBoquetteForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private boquette : BoquetteService,
    private auth : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(){
    this.newBoquetteForm = this.formBuilder.group({
      name : '',
      password : '',
      passwordConfirm : '',
      respo : '',
      description : '',
      role : ''
    })
  }

  onSubmitForm(){
    const formValue = this.newBoquetteForm.value;
    var newBoquette = new Boquette(
      undefined,
      undefined,
      undefined,
      formValue['name'],
      formValue['respo'],
      formValue['description'],
      formValue['role']
    )
    this.auth.sigin(newBoquette,formValue['password'])
    .subscribe(value =>{
      console.log(value);
      if(value instanceof Error){
        console.log(value);
      }else {
        
        newBoquette = value;
        this.router.navigate(['boquette',newBoquette.getId()]);
      }
    })
  }

}
