import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/other/auth.service';
import { BoquetteService } from './services/boquette/boquette.service';
import { ChannelService } from './services/channel/channel.service';
import { RotanceService } from './services/boquette/rotance.service';
import { PostsService } from './services/channel/posts.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from './_modal/modal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    BoquetteService,
    ChannelService,
    RotanceService,
    PostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
