import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Channel } from 'src/app/class/channel/channel';
import { ChannelService } from 'src/app/services/channel/channel.service';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit,OnDestroy {

  public channelList : Channel[];

  private channelSub : Subscription;
  constructor(
    private channel : ChannelService
  ) { }

  ngOnDestroy(): void {
    this.channelSub.unsubscribe();
  }

  ngOnInit(): void {
    this.channelSub = this.channel.objectListObs
    .subscribe(value =>{
      this.channelList = value;
    });
    this.channel.fetch();
  }

}
