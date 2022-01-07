package com.skilldistillery.anime.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.anime.entities.Anime;
import com.skilldistillery.anime.repositories.AnimeRepository;


@Service
public class AnimeServiceImpl implements AnimeService {
	
	@Autowired
	private AnimeRepository aniRepo;

	@Override
	public List<Anime> getAllAnimes() {
		return aniRepo.findAll();
	}

	@Override
	public Anime getAnimeById(int id) {
		return null;
	}

}
