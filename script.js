// constants
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');



// Unsplash API
const count = 10;
const apiKey = '_A407AN1t8fZui_UZWtK8UfZtXjKmGWd25ZWQTW7apc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let photosArray = [];

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray);
} catch (error) {
        
    }
}

//on load
getPhotos();