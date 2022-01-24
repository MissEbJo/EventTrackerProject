import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {HttpClientModule } from '@angular/common/http';
import { AnimeService } from './services/anime.service';
import { AnimeComponent } from './components/anime/anime.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
import { FormsModule } from '@angular/forms';
import { CounterPipe } from './pipes/counter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnimeComponent,
    YoutubePlayerComponent,
    CounterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    YouTubePlayerModule,
    FormsModule
  ],
  providers: [
    AnimeService,
    CounterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class YoutubePlayerExampleModule {}
