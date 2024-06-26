// Section 1 knoppen ID uit html benoemen en koppelen aan een const//
const outputDiv = document.getElementById("output");
const showAgeButton = document.getElementById("showAge");
const showPondButton = document.getElementById("showPond");
const showBreadButton = document.getElementById("showBread");
const showCharacterButton = document.getElementById("showCharacter");

// Bij currentkey geef ik aan dat het geen waarde heeft //
let currentKey = null;

// Hier pas ik on click event listeners toe bij de buttons const's ook geef ik aan welke data er getoond moet worden op de site //
showAgeButton.addEventListener("click", function () {
    toggleDisplayData("leeftijd");
});

showPondButton.addEventListener("click", function () {
    toggleDisplayData("woonVijver");
});

showBreadButton.addEventListener("click", function () {
    toggleDisplayData("favorieteBrood");
});

showCharacterButton.addEventListener("click", function () {
    toggleDisplayData("karakter");
});

// Hier maak ik de functie aan die data haalt uit mijn json file, die op github staat. 'return' statement zorgt ervoor dat het resultaat van de
// fetch functie wordt doorgegeven aan de rest van het programma. .then staat toe dat de code wordt uitgevoerd als !response.ok is wordt er
// de json file gereturned. Gaat dit fout dan wordt throw getriggerd en om te voorkomen dat er vanaf het begin een error op de site wordt getoond
// wanneer er iets fout gaat, gebruikt ik .catch. 
function fetchData() {
    return fetch('https://justinprins98.github.io/web-app-from-scratch-2324/data/eigenschappen.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .catch(error => console.error('Error fetching JSON:', error));
}

function toggleDisplayData(key) {
    if (currentKey === key) {
        // If the button is clicked again, hide the data
        outputDiv.textContent = '';
        currentKey = null;
    } else {
        // Otherwise, show the data for the clicked button
        fetchData().then(data => {
            outputDiv.textContent = data.eend[key];
            currentKey = key;
        })
            .catch(error => console.error('Error fetching JSON:', error));
    }
}

// API duck images //
document.getElementById("getRandomDuck").addEventListener("click", function () {
    getRandomDuck();
});
const accessKey = 'p8vkhfImFC407jjPmnQRpwm1Y8st34RAIq8Fi6bsdQ8'
function getRandomDuck() {

    // Make a request to the Unsplash API
    fetch(`https://api.unsplash.com/photos/random?query=duck&client_id=${accessKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const duckUrl = data.urls.regular;
            document.getElementById("duckImage").src = duckUrl;
        })
        .catch(error => console.error('Error fetching duck image:', error));
}






















///////////* TOP 3 Mensen waarop de een zou poepen */////////////////////    

document.addEventListener("DOMContentLoaded", function () {
    // Get the podium items
    const thirdPlace = document.getElementById("thirdPlace");
    const secondPlace = document.getElementById("secondPlace");
    const firstPlace = document.getElementById("firstPlace");

    // Calculate the offset when the section becomes visible
    const offset = document.querySelector(".podium-section").offsetTop - 450;

    // Add a scroll event listener
    window.addEventListener("scroll", function () {
        // Check if the user has scrolled to the section
        if (window.pageYOffset >= offset) {
            // Apply the transformation to move the podium items up
            thirdPlace.style.transform = "translateY(0%)";
            secondPlace.style.transform = "translateY(-25%)";
            firstPlace.style.transform = "translateY(-50%)";
        }
    });
});

// Scroll to section 2 when pressing the duck image 

const clickableNavImage = document.getElementById('clickableNavImage');

clickableNavImage.addEventListener('click', function () {
    const targetSection = document.getElementById('duckImage');
    targetSection.scrollIntoView({ behavior: 'smooth' });
});


