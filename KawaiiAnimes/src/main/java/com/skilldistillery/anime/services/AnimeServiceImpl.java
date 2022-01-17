package com.skilldistillery.anime.services;

import java.util.List;
import java.util.Optional;

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
		Optional<Anime> animeOpt = aniRepo.findById(id);
		Anime anime = null;
		if(animeOpt.isPresent()) {
			anime = animeOpt.get();
		}
		return anime;
	}

	@Override
	public Anime create(Anime anime) {
		return aniRepo.save(anime);
	}

	@Override
	public Anime update(int id, Anime anime) {
		Optional<Anime> animeOpt = aniRepo.findById(id);
		Anime managed = null;
		if(animeOpt.isPresent()) {
			managed = animeOpt.get();
			managed.setAired(anime.getAired());
			managed.setDescription(anime.getDescription());
			managed.setEpisodes(anime.getEpisodes());
			managed.setImageUrl(anime.getImageUrl());
			managed.setSeasons(anime.getSeasons());
			managed.setSoundtrackUrl(anime.getSoundtrackUrl());
			managed.setTitle(anime.getTitle());
			managed.setTrailerUrl(anime.getTrailerUrl());
			aniRepo.saveAndFlush(managed);
		}
		return managed;
	}

	@Override
	public boolean delete(int id) {
		boolean deleted = false;
		if(aniRepo.existsById(id)) {
			aniRepo.deleteById(id);
			deleted = true;
		}
		return deleted;
	}

	@Override
	public List<Anime> showAnimeByKeyword(String keyword) {
		keyword = "%" + keyword + "%";
		return aniRepo.findByTitleLike(keyword);
	}

}
