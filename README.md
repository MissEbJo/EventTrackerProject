# EventTrackerProject

## Overview
Welcome to Kawaii Anime, your favorite database to look up, add, and update anime.
Whether you're looking for a certain anime or what to view different types of anime, Kawaii is the website for you!

### REST applying

### HTML/JavaScript

## Angular Front End

### REST API Reference
|Return Type | Route | Functionality |JSON|
|------------|-------|---------------|----|
|`List<Anime>` | `GET /api/animes`| Gets all anime| |
|`Anime`       | `GET /api/animes/{id}` | Gets anime by id| |
|`Anime`       | `POST /api/animes/` | Creates a new anime| {

    "title": "Fullmetal Alchemist"

}|
|`Anime`       | `PUT /api/animes/{id}`| Updates anime |
|`void`        |`DELETE /api/animes/{id}`| Deletes a anime by id|
|`List<Anime>`| `GET /api/animes/search/{keyword}`| Gets all anime by title|

### Technologies Used
Eclipse, Postman, MySQL Workbench, Github, Figma, Youtube, Spotify
### Lessons Learned
So far, this project helped me solidify creating databases and RESTful applications. I learned how easy it was to map my database to my Spring project. At first glance, I panicked when attempting to create my methods, but it was easier during this project because I remembered that I had already done it a few times before, so my mind quickly calmed down/
