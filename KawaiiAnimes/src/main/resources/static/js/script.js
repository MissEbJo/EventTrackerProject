console.log('testing');

window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
});

function init(){
	console.log('init loaded');
	document.animeForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var id = document.animeForm.animeId.value;
		if (!isNaN(id) && id > 0) {
			getAnime(id);
		}
});
}

function getAnime(id) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/animes/' + id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let anime = JSON.parse(xhr.responseText);
				console.log(anime);
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

function displayAnime(anime){
	var div = document.getElementById('animeData');
	div.textContent ='';
	
	let h1 = document.createElement('h1');
	h1.textContent = anime.title;
	div.appendChild(h1); 
	
	let airedDate = document.createElement('date');
	airedDate.textContent = 'Original Broadcast: ' + anime.aired;
	div.appendChild(airedDate);
	
	let br = document.createElement("br");
	div.appendChild(br);
	
	let image = new Image();
	image.src = anime.imageUrl;
	if (image.src === null) {
		image.textContent = 'No image';
	}
	else {
		div.appendChild(image);
	}
	
}