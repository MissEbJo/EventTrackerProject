package com.skilldistillery.anime;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class KawaiiAnimesApplication extends SpringBootServletInitializer {

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(KawaiiAnimesApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(KawaiiAnimesApplication.class, args);
	}

}
