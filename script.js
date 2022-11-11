
// Unsplash API
const count = 10;
const apiKey = '_A407AN1t8fZui_UZWtK8UfZtXjKmGWd25ZWQTW7apc';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
} catch (error) {
        
    }
}

//on load
getPhotos();