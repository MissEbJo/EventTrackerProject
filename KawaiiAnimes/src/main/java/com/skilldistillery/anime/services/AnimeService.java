package com.skilldistillery.anime.services;

import java.util.List;

import com.skilldistillery.anime.entities.Anime;

public interface AnimeService {

	List<Anime> getAllAnimes();

	Anime getAnimeById(int id);

	Anime create(Anime anime);

	Anime update(int id, Anime anime);

	boolean delete(int id);

	List<Anime> showAnimeByKeyword(String keyword);

}
