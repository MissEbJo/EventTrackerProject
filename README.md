# Event Tracker Project

## Overview
Welcome to Kawaii Anime, your favorite database to look up, add, and update anime.
Whether you're looking for a certain anime or what to view different types of anime, Kawaii is the website for you! As you look through the website, you can search for an anime by id or keyword.

### REST applying

### HTML/JavaScript
This project includes HTML/JavaScript functionality. It uses the HTML to create divs & the Script to dynamically create forms & tables to display each anime.

## Angular Front End

This project includes Angular functionality including all CRUD functionality to allow code reusability for HTML and structured components for maintainability.

### REST API Reference
|Return Type | Route | Functionality |JSON|
|------------|-------|---------------|----|
|`List<Anime>` | `GET /api/animes`| Gets all anime| |
|`Anime`       | `GET /api/animes/{id}` | Gets anime by id| |
|`Anime`       | `POST /api/animes/` | Creates a new anime| `{ "title": "Fullmetal Alchemist 2"}`|
|`Anime`       | `PUT /api/animes/{id}`| Updates anime |`{ "id": 5,  "title": "Toyko Ghoul","description": null,"imageUrl": null, "aired": "2015-04-04", "seasons": 2,"episodes": 51,"trailerUrl": null,"soundtrackUrl": null}` |
|`void`        |`DELETE /api/animes/{id}`| Deletes a anime by id|
|`List<Anime>`| `GET /api/animes/search/{keyword}`| Gets all anime by title|

### Technologies Used
Eclipse, Postman, MySQL Workbench, Github, Figma, Youtube, Spotify, Angular, Atom
### Lessons Learned
So far, this project helped me solidify creating databases and RESTful applications. I learned how easy it was to map my database to my Spring project. At first glance, I panicked when attempting to create my methods, but it was easier during this project because I remembered that I had already done it a few times before, so my mind quickly calmed down.

Angular is a great stress free tool to minimize confusion with HTTP related request. It allowed me to quickly implement CRUD functionality and create a simple project without too much hassle.

### Difficulties
Attempting to figure out DOM functionality is a sore spot. Need to do more research.
Pipes fall into the same category. More research is needed to correctly implement this feature. As of now, website is still functioning.
