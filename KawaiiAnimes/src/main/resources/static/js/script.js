console.log('testing script.js')

window.addEventListener('load', function(e) {
	console.log('Document Loaded');
	init();
});

function init() {
	console.log('init loaded');
	document.animeForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var id = document.animeForm.animeId.value;
		if (!isNaN(id) && id > 0) {
			getAnime(id);
		}
		let allAnimeDiv = document.getElementById('lowerPageData');
		allAnimeDiv.textContent = '';
	})
	let allAnimeBtn = document.getElementById('displayAllAnime');
	allAnimeBtn.addEventListener('click', function(e) {
		e.preventDefault();
		allAnime();
	});

	//EVERYTHING GETS CONFUSED HERE!!

	let inputBtn = document.getElementById('addAnime');
	inputBtn.addEventListener('click', function(event) {
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

	//	document.updateAnimeForm.updateAnime.addEventListener('click', function(event) {
	//		event.preventDefault();
	//		let form = document.updateAnimeForm;
	//		let updatedAnime = {
	//			title: form.title.value,
	//			description: form.description.value,
	//			aired: form.aired.value,
	//			seasons: form.seasons.value,
	//			episodes: form.episodes.value
	//		};
	//		updateAnime(updatedAnime);
	//	});
}

function displayError(msg) {
	var dataDiv = document.getElementById('animeData');
	dataDiv.textContent = msg;

}

function allAnime() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/animes');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let animes = JSON.parse(xhr.responseText);
				console.log(animes);
				//		displayAnime(anime);
				table(animes);
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

function createAnime(newAnime) {
	console.log(newAnime);
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/animes');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let anime = JSON.parse(xhr.responseText);
				//displayAnime(anime);
			}
			else {
				console.error('Anime create failed with status: ' + xhr.status);
			}
		}
	};

	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(JSON.stringify(newAnime));
}

function updateAnime(updatedAnime, id) {
	console.log(updatedAnime);
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/animes/' + id);
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

	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(JSON.stringify(updatedAnime));
}
function displayError(msg) {
	var dataDiv = document.getElementById('animeData');
	//	var actorDiv = document.getElementById('actorData');
	dataDiv.textContent = msg;
	//	actorDiv.textContent = '';

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

	let desc = document.createElement('blockquote');
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
	let br = document.createElement("br");
	dataDiv.appendChild(br);

	var editBtn = document.createElement('button');
	editBtn.textContent = 'Update Anime';
	dataDiv.appendChild(editBtn);

	editBtn.addEventListener('click', function(e) {
		e.preventDefault();
		createUpdateForm(anime);
	})

	function createUpdateForm(anime) {
		let animeData = document.getElementById('animeData');
		animeData.textContent = '';
		let updateAnimeForm = document.createElement('form');
		updateAnimeForm.id = 'updateAnimeForm';
		updateAnimeForm.name = 'updateAnimeForm';
		animeData.appendChild(updateAnimeForm);

		let label1 = document.createElement('label');
		label1.for = 'title';
		label1.textContent = 'Anime Title';
		animeData.appendChild(label1);

		let inputTitle = document.createElement('input');
		inputTitle.class = "updateAnime";
		inputTitle.type = 'text';
		inputTitle.name = 'title';
		inputTitle.value = anime.title;
		animeData.appendChild(inputTitle);

		let label2 = document.createElement('label');
		label2.for = 'description';
		label2.textContent = 'Anime Description';
		animeData.appendChild(label2);

		let inputDescription = document.createElement('input');
		inputDescription.class = "updateAnime";
		inputDescription.type = 'text';
		inputDescription.name = 'description';
		inputDescription.value = anime.description;
		animeData.appendChild(inputDescription);

		let updateBtn = document.createElement('input');
		updateBtn.type = 'submit';
		updateBtn.textContent = 'Update';
		animeData.appendChild(updateBtn);
		updateBtn.addEventListener('click', function(e) {
			e.preventDefault();
			let f = document.updateAnimeForm;
			anime.title = f.title.value;
			anime.description = f.description.value;
			updateAnime(anime);

		})
	}
}

function table(animes) {
	var allAnimeDiv = document.getElementById('lowerPageData');
	allAnimeDiv.textContent = '';
	var table = document.createElement('table');
	allAnimeDiv.appendChild(table);
	var thead = document.createElement('thead');
	table.appendChild(thead);


	var trow = document.createElement('tr');
	trow.textContent = "Title";
	table.appendChild(trow);


	var th1 = document.createElement('th');
	th1.textContent = 'Description';
	thead.appendChild(th1);
	var th2 = document.createElement('th');
	th2.textContent = 'Aired';
	thead.appendChild(th2);
	var th3 = document.createElement('th');
	th3.textContent = 'Seasons';
	thead.appendChild(th3);

	var tbody = document.createElement('body');
	table.appendChild(tbody);

	for (let i = 0; i < animes.length; i++) {
		var tr = document.createElement('tr');
		var td_1 = document.createElement('td');
		td_1.textContent = animes[i].title;
		tr.appendChild(td_1);
		var td1 = document.createElement('td');
		//td.
		td1.textContent = animes[i].description;
		tr.appendChild(td1);
		var td2 = document.createElement('td');
		td2.textContent = animes[i].aired;
		tr.appendChild(td2);
		var td3 = document.createElement('td');
		td3.textContent = animes[i].seasons;
		tr.appendChild(td3);

		tr.addEventListener('click', function(e) {
			e.preventDefault();
			getAnime(animes[i].id);
		})
		tbody.appendChild(tr);
	}


}







