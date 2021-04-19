import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Boquette } from 'src/app/class/boquette/boquette';
import { Channel } from 'src/app/class/channel/channel';
import { Posts } from 'src/app/class/channel/posts';
import { BoquetteService } from 'src/app/services/boquette/boquette.service';
import { ChannelService } from 'src/app/services/channel/channel.service';
import { PostsService } from 'src/app/services/channel/posts.service';
import { ModalService } from 'src/app/_modal';

@Component({
  selector: 'app-channel-single-page',
  templateUrl: './channel-single-page.component.html',
  styleUrls: ['./channel-single-page.component.css']
})
export class ChannelSinglePageComponent implements OnInit,OnDestroy {
  public singleChannel : Channel;
  public postsList : Posts[];
  public boquetteList : Boquette[] = [];

  private boquetteSub : Subscription;
  constructor(
    private channel : ChannelService,
    private posts : PostsService,
    private boquette : BoquetteService,
    private router : Router,
    private route : ActivatedRoute,
    private modal : ModalService
  ) { }
  ngOnDestroy(): void {
    if(this.boquetteSub){
      this.boquetteSub.unsubscribe();
    }
  }

  ngOnInit(): void {
    let channelId = this.route.snapshot.params['id'];
    this.channel.getById(channelId)
    .subscribe(value =>{
      if(value instanceof Error){
        console.log(value);
      }else {
        this.singleChannel = value;
        this.boquetteSub = this.boquette.objectListObs.subscribe(
          value =>{
            let boquetteIdArr = this.singleChannel.getBoquetteArr();
            for(let bId of boquetteIdArr){
              this.boquetteList.push(this.boquette.searchOn(bId));
            }
          }
        )
        this.boquette.fetch();
        this.posts.getByDependance(this.singleChannel.getId(),'channel')
        .subscribe(value =>{
          if(value instanceof Error){
            console.log(value);
          } else {
            this.postsList = value;
          }
        })
      }
    })
  }

  onDelete(){
    this.modal.open('confirm');
  }

  onCancel(){
    this.modal.close('confirm');
  }

  onConfirm(){
    this.posts.deleteByDependance(this.singleChannel.getId(),'channel')
    .subscribe(value =>{
      console.log(value);
      this.channel.delete(this.singleChannel.getId())
      .subscribe(value =>{
        console.log(value);
        this.router.navigate(['channel','list']);
      })
    })
  }

}
