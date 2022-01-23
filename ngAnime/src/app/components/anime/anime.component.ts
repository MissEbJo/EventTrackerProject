import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Anime[] = [];

  constructor(
    private aniSer: AnimeService
  ) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.aniSer.index().subscribe({
      next: (animes) =>{
        this.animes = animes;
      },
      error: (err) => {
        console.error('AnimeComponent.reload failed: Error getting animes')
        console.error(err);
      }
    })
  }
}
