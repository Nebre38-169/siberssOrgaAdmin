import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { ChannelService } from 'src/app/services/channel/channel.service';

@Component({
  selector: 'app-channel-create',
  templateUrl: './channel-create.component.html',
  styleUrls: ['./channel-create.component.css']
})
export class ChannelCreateComponent implements OnInit,OnDestroy {

  newChannelForm : FormGroup;
  public boquetteList : Boquette[];
  
  private boquetteSub : Subscription;
  constructor(
    private formBuilder: FormBuilder,
    private boquette : BoquetteService,
    private channel : ChannelService,
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnDestroy(): void {
    this.boquetteSub.unsubscribe();
  }

  ngOnInit(): void {
    this.boquetteSub = this.boquette.objectListObs
    .subscribe(value =>{
      this.boquetteList = value;
      this.initForm();
      console.log(this.newChannelForm);
    })
    this.boquette.fetch();
  }

  private initForm(){
    this.newChannelForm = this.formBuilder.group({
      name : ['',Validators.required],
      boquettes : this.formBuilder.array([])
    })
    for(let b of this.boquetteList){
      this.onAddBoquette();
    }
  }

  getBoquette() : FormArray {
    return this.newChannelForm.get('boquettes') as FormArray;
  }

  onAddBoquette(){
    const newBoquetteControl = this.formBuilder.control(null);
    this.getBoquette().push(newBoquetteControl);
  }

  onSubmitForm(){
    const formValue = this.newChannelForm.value;
    let boquetteArray = "";
    for(let i=0;i<formValue['boquettes'].length;i++){
      if(formValue['boquettes'][i]){
        boquetteArray+=`${this.boquetteList[i].getId()},`;
      }
    }
    boquetteArray = boquetteArray.slice(0,boquetteArray.length-1);
    let newChannel = new Channel(
      undefined,
      undefined,
      undefined,
      formValue['name'],
      boquetteArray
    )
    this.channel.createNew(newChannel)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['channel','list']);
      }
    })
  }

}
