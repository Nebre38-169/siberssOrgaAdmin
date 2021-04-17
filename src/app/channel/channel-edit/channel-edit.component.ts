import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { ChannelService } from 'src/app/services/channel/channel.service';

@Component({
  selector: 'app-channel-edit',
  templateUrl: './channel-edit.component.html',
  styleUrls: ['./channel-edit.component.css']
})
export class ChannelEditComponent implements OnInit,OnDestroy {

  editChannelForm : FormGroup
  public boquetteList : Boquette[];

  public editedChannel : Channel;
  private boquetteSub : Subscription;
  constructor(
    private formBuilder : FormBuilder,
    private channel : ChannelService,
    private boquette : BoquetteService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnDestroy(): void {
    this.boquetteSub.unsubscribe();
  }

  ngOnInit(): void {
    let channelId = this.route.snapshot.params['id'];
    this.channel.getById(channelId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.editedChannel = value
        this.boquetteSub = this.boquette.objectListObs
        .subscribe(value =>{
          this.boquetteList = value;
          this.initForm(this.editedChannel);
        })
      }
    })
    this.boquette.fetch();
  }

  private initForm(c: Channel){
    this.editChannelForm = this.formBuilder.group({
      name : [c.nom,Validators.required],
      boquettes : this.formBuilder.array([])
    })
    for(let b of this.boquetteList){
      this.onAddBoquette(c,b);
    }
  }

  public getBoquette() : FormArray {
    return this.editChannelForm.get('boquettes') as FormArray;
  }

  private onAddBoquette(c : Channel, b : Boquette){
    let value = c.boquettes.includes(String(b.getId()));
    const newBoquetteControl = this.formBuilder.control(value);
    this.getBoquette().push(newBoquetteControl);
  }

  onSubmitForm(){
    const formValue = this.editChannelForm.value;
    let boquetteArray = "";
    for(let i=0;i<formValue['boquettes'].length;i++){
      if(formValue['boquettes'][i]){
        boquetteArray+=`${this.boquetteList[i].getId()},`;
      }
    }
    boquetteArray = boquetteArray.slice(0,boquetteArray.length-1);
    this.editedChannel.boquettes = boquetteArray;
    this.editedChannel.nom = formValue['name'];
    this.channel.edit(this.editedChannel)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      } else {
        this.router.navigate(['channel','list']);
      }
    })
  }

}
