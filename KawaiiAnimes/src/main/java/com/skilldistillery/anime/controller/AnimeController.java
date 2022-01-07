package com.skilldistillery.anime.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.anime.entities.Anime;
import com.skilldistillery.anime.services.AnimeService;

@RestController
@RequestMapping("api")
public class AnimeController {
	@Autowired
	private AnimeService aniSer;

	@GetMapping("animes")
	public List<Anime> index(){
		return aniSer.getAllAnimes();
	}
}
