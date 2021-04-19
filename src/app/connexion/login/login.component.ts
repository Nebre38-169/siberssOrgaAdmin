import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/other/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  connexionForm : FormGroup;

  constructor(private formBuilder : FormBuilder,
    private auth : AuthService,
    private router : Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.connexionForm = this.formBuilder.group({
      boquette : ['',Validators.required],
      password : ['',Validators.required]
    });
  }

  onSubmitForm(){
    const formValue = this.connexionForm.value;
    this.auth.login(
      formValue['boquette'],
      formValue['password']
    ).subscribe(
      value =>{
        if(value instanceof Error){
          console.log(value);
        } else {
          this.router.navigate(['boquette','list']);
        }
      }
    )
  }
}