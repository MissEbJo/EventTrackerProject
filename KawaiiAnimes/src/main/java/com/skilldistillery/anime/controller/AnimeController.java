package com.skilldistillery.anime.controller;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.anime.entities.Anime;
import com.skilldistillery.anime.services.AnimeService;

@RestController
@RequestMapping("api")
@CrossOrigin({ "*", "http://localhost:4203" })
public class AnimeController {
	@Autowired
	private AnimeService aniSer;

	@GetMapping("animes")
	public List<Anime> index() {
		return aniSer.getAllAnimes();
	}

	@GetMapping("animes/{id}")
	public Anime showAnime(@PathVariable int id, HttpServletResponse res) {
		Anime singleAnime = aniSer.getAnimeById(id);
		if (singleAnime == null) {
			res.setStatus(404);
		}

		return singleAnime;
	}

	@PostMapping("animes")
	public Anime createAnime(@RequestBody Anime anime, HttpServletResponse res) {
		Anime newAnime = aniSer.create(anime);

		if (newAnime == null) {
			res.setStatus(404);
		} else {
			res.setStatus(201);
		}
		return newAnime;

	}

	@PutMapping("animes/{id}")
	public Anime updateAnime(@PathVariable int id, @RequestBody Anime anime, HttpServletResponse res) {
		try {
			anime = aniSer.update(id, anime);
			if (anime == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
			anime = null;
		}
		return anime;

	}

	@DeleteMapping("animes/{id}")
	public void deleteAnime(@PathVariable int id, HttpServletResponse res) {
		try {
			if (aniSer.delete(id)) {
				res.setStatus(204);
			} else {
				res.setStatus(404);
			}
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
	}
	
	@GetMapping("animes/search/{keyword}")
	public List<Anime> searchAnimeBykeyword(@PathVariable String keyword, HttpServletResponse res ){
		//add status code
		
		return aniSer.showAnimeByKeyword(keyword);
	}
}
