import { Component, OnInit } from '@angular/core';
import { Anime } from 'src/app/models/anime';
import { CounterPipe } from 'src/app/pipes/counter.pipe';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  animes: Anime[] = [];
  selected: Anime | null = null;
  newAnime: Anime = new Anime();
  editAnime: Anime | null = null;

  constructor(
    private aniSer: AnimeService,
    private counterPipe: CounterPipe
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
  getNumOfAnime(){
    return this.counterPipe.transform(this.animes);
  }
  addAnime(anime: Anime){
    this.aniSer.create(this.newAnime);
    this.aniSer.create(anime).subscribe({
      next: (anime) => {
        this.newAnime = new Anime();
        this.reload();
      },
      error: (fail) => {
        console.error('Error on creation');
      }
    });
  }

  updateAnime(anime: Anime, goToDetails = true) {
    this.aniSer.update(anime).subscribe({
      next: (a) => {
        this.editAnime = null;
        if (goToDetails) {
          this.selected = a;
        }
        this.reload();
      },
      error: (fail) => {
        console.error('AnimeListComponent.updateAnime(): Error on update');
        console.error(fail);
      },
    });
  }

  deleteAnime(animeId: number){
    this.aniSer.destroy(animeId).subscribe({
      next: () => {
        this.reload();
      },
      error: (fail) => {
        console.error('AnimeListComponent.deleteAnime(): Error on deletion');
        console.error(fail);
      }
    });
  }

  setEditAnime(){
    this.editAnime = Object.assign({}, this.selected);
  }
  displayAnime(anime: Anime){
    this.selected = anime;
  }
  displayTable(){
    this.selected = null;
  }
}
