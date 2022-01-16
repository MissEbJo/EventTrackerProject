console.log('testing script.js')

window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
	allAnime();
});

function init() {
	console.log('init loaded');
	document.animeForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var id = document.animeForm.animeId.value;
		if (!isNaN(id) && id > 0) {
			getAnime(id);
		}
	})
	document.addAnimeForm.addAnime.addEventListener('click', function(event) {
		event.preventDefault();
		let form = document.addAnimeForm;
		let newAnime = {
			title: form.title.value,
			description: form.description.value,
			aired: form.aired.value,
			seasons: form.seasons.value,
			episodes: form.episodes.value
		};
		createAnime(newAnime);
	});

}
function displayError(msg) {
	var dataDiv = document.getElementById('animeData');
	dataDiv.textContent = msg;

}
function allAnime() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/animes');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4)  {
			if (xhr.status === 200) {
				let anime = JSON.parse(xhr.responseText);
				console.log(anime);
				//		displayAnime(anime);
			}
			else if (xhr.status === 404) {
				console.error('ERROR!');
				displayError("Anime" + id + "not found");
			}
			else {
				displayError("Error retrieving anime: " + xhr.status);
			}
		}
	};
	xhr.send();

}

function getAnime(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/animes/' + id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let anime = JSON.parse(xhr.responseText);
				displayAnime(anime);
			}
			else if (xhr.status === 404) {
				console.error('ERROR!');
				displayError("Anime" + id + "not found");
			}
			else {
				displayError("Error retrieving anime: " + xhr.status);
			}
		}
	};
	xhr.send();
}
function displayError(msg) {
	var dataDiv = document.getElementById('filmData');
	var actorDiv = document.getElementById('actorData');
	dataDiv.textContent = msg;
	actorDiv.textContent = '';

}

function displayAnime(anime) {
	var dataDiv = document.getElementById('animeData');
	dataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = anime.title;
	dataDiv.appendChild(h1);

	let airedDate = document.createElement("date");
	airedDate.textContent = 'Original Broadcast: ' + anime.aired;
	dataDiv.appendChild(airedDate);

	let details = document.createElement('p');
	let details2 = document.createElement('p');
	details.textContent = 'Seasons: ' + anime.seasons;
	dataDiv.appendChild(details);
	details2.textContent = 'Episodes: ' + anime.episodes;
	dataDiv.appendChild(details2);

	let desc = document.createElement('p');
	desc.textContent = anime.description;
	dataDiv.appendChild(desc);

	let image = new Image();
	image.src = anime.imageUrl;
	if (image.src === null) {
		image.textContent = 'No image';
	}
	else {
		dataDiv.appendChild(image);
	}

	//TODO: figure out how to get videos to appear on webpage
	//	let video = document.createElement('VIDEO');
	//	video.src = anime.trailerUrl;
	//	video.crossOrigin = 'anonymous';
	//	video.play();
	//	dataDiv.appendChild(video);

}

function createAnime(newAnime) {
	console.log(newAnime);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/animes');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let anime = JSON.parse(xhr.responseText);
				displayAnime(anime);
			}
			else {
				console.error('Anime create failed with status: ' + xhr.status);
			}
		}
	};

	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newAnime));
}









