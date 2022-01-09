package com.skilldistillery.anime.entities;

import static org.junit.jupiter.api.Assertions.*;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

class AnimeTest {
	private static EntityManagerFactory emf;
	private EntityManager em;
	private Anime anime;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("AnimesJPA");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		anime = em.find(Anime.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		anime = null;
	}

	@Test
	@DisplayName("test Anime mappings")
	void test1() {
		assertNotNull(anime);
		assertEquals("Maidsama", anime.getTitle());
		
	}
	@Test
	@DisplayName("test Anime date mappings")
	void test2() {
		assertNotNull(anime);
		assertEquals(2010, anime.getAired().getYear());
	}

}
