document.addEventListener("DOMContentLoaded", function() {
    fetchBreeds();
});

function fetchBreeds() {
    fetch('https://dog.ceo/api/breeds/list')
    .then(response => response.json())
    .then(data => {
        const breeds = data.message.slice(0, 10); // Fetching first 10 breeds for simplicity
        displayBreeds(breeds);
    })
    .catch(err => {
        console.error("Error fetching breeds:", err);
    });
}

function displayBreeds(breeds) {
    const breedsDiv = document.getElementById('breeds');
    breedsDiv.innerHTML = breeds.map(breed => `<div class="breed" onclick="fetchDogs('${breed}')">${breed}</div>`).join('');
}

function fetchDogs(breed) {
    fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`)
    .then(response => response.json())
    .then(data => {
        displayDogs(data.message);
    })
    .catch(err => {
        console.error("Error fetching dog images:", err);
    });
}

function displayDogs(images) {
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = images.map(img => `
        <div class="dog">
            <img src="${img}" alt="Dog" width="120">
        </div>
    `).join('');
}
