import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';

@Component({
  selector: 'app-channel-single',
  templateUrl: './channel-single.component.html',
  styleUrls: ['./channel-single.component.css']
})
export class ChannelSingleComponent implements OnInit,OnDestroy {

  @Input() singleChannel : Channel;

  public boquetteList : Boquette[] = [];

  private boquetteSub : Subscription;
  constructor(
    private boquette : BoquetteService
  ) { }

  ngOnDestroy(): void {
    this.boquetteSub.unsubscribe();
  }

  ngOnInit(): void {
    this.boquetteSub = this.boquette.objectListObs.subscribe(
      value =>{
        let boquetteIdArr = this.singleChannel.getBoquetteArr();
        for(let bId of boquetteIdArr){
          this.boquetteList.push(this.boquette.searchOn(bId));
        }
      }
    )
    this.boquette.fetch();
  }

}
