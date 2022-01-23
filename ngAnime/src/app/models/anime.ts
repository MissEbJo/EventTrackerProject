export class Anime {
  id: number;
  title: string;
  description: string | undefined;
  imageUrl: string | undefined;
  aired: number;
  seasons: number;
  episodes: number;
  trailerUrl: string | undefined;
  soundtrackUrl: string | undefined;

  constructor(
    id: number = 0,
    title: string = '',
    aired: number = 0,
    seasons: number = 0,
    episodes: number = 0,
    description?: string,
    imageUrl?: string,
    trailerUrl?: string,
    soundtrackUrl?: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.aired = aired;
    this.seasons = seasons;
    this.episodes = episodes;
    this.trailerUrl = trailerUrl;
    this.soundtrackUrl = soundtrackUrl;
  }
}
