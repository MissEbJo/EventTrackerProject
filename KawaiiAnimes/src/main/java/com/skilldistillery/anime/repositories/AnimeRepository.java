package com.skilldistillery.anime.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.anime.entities.Anime;

public interface AnimeRepository extends JpaRepository<Anime, Integer> {
	

}
