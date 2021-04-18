import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Boquette } from 'src/app/class/boquette/boquette';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { AuthService } from 'src/app/services/other/auth.service';

@Component({
  selector: 'app-boquette-edit-password',
  templateUrl: './boquette-edit-password.component.html',
  styleUrls: ['./boquette-edit-password.component.css']
})
export class BoquetteEditPasswordComponent implements OnInit {

  editPasswordForm : FormGroup;
  public singleBoquette : Boquette;

  constructor(
    private auth : AuthService,
    private boquette : BoquetteService,
    private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    private router : Router,
  ) { }

  ngOnInit(): void {
    let boquetteId = this.route.snapshot.params['id'];
    this.boquette.getById(boquetteId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.singleBoquette = value;
        this.initForm();
      }
    })
  }

  private initForm(){
    this.editPasswordForm = this.formBuilder.group({
      password : ['',Validators.required],
      confirm : ['',Validators.required]
    })
  }

  onSubmitForm(){
    const formValue = this.editPasswordForm.value;
    if(formValue['password']===formValue['confirm']){
      this.auth.updatePassword(this.singleBoquette,formValue['password'])
      .subscribe(value =>{
        if(value instanceof Error){
          console.log(value);
        } else {
          this.router.navigate(['boquette',this.singleBoquette.getId()]);
        }
      })
    }
  }

}
