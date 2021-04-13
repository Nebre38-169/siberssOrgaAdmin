import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/other/auth.service';
import { BoquetteService } from './services/boquette/boquette.service';
import { ChannelService } from './services/channel/channel.service';
import { RotanceService } from './services/boquette/rotance.service';
import { PostsService } from './services/channel/posts.service';
import { BaseService } from './services/base/base.service';
import { BaseWithDependanceService } from './services/base/base-with-dependance.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
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
