package com.skilldistillery.anime.services;

import java.util.List;

import com.skilldistillery.anime.entities.Anime;

public interface AnimeService {
	
	List<Anime> getAllAnimes();
	Anime getAnimeById(int id);

}
