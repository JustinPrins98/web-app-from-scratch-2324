// Specify the URL of the JSON file
// const jsonFileUrl = 'https://justinprins98.github.io/web-app-from-scratch-2324/data/eigenschappen.json';

// // Use the Fetch API to get the JSON data
// fetch(jsonFileUrl)
//     .then(response => {
//         // Check if the response is successful (status code 200-299)
//         if (!response.ok) {
//             throw new Error(`Network response was not ok: ${response.statusText}`);
//         }
//         // Parse the JSON from the response
//         return response.json();
//     })
//     .then(data => {
//         // Handle the JSON data
//         console.log(data);
//     })
//     .catch(error => {
//         // Handle any errors that occurred during the fetch
//         console.error('Error during fetch:', error);
//     });


const outputDiv = document.getElementById("output");
const showAgeButton = document.getElementById("showAge");
const showPondButton = document.getElementById("showPond");
const showBreadButton = document.getElementById("showBread");
const showCharacterButton = document.getElementById("showCharacter");

console.log(outputDiv);

showAgeButton.addEventListener("click", function () {
    displayData("leeftijd");
});

showPondButton.addEventListener("click", function () {
    displayData("woonVijver");
});

showBreadButton.addEventListener("click", function () {
    displayData("favorieteBrood");
});

showCharacterButton.addEventListener("click", function () {
    displayData("karakter");
});

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

function displayData(key) {
    fetchData().then(data => {
        outputDiv.textContent = data.eend[key];
    })
        .catch(error => console.error('Error fetching JSON:', error));
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

