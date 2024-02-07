// Specify the URL of the JSON file
const jsonFileUrl = 'https://justinprins98.github.io/web-app-from-scratch-2324/data/eigenschappen.json';

// Use the Fetch API to get the JSON data
fetch(jsonFileUrl)
    .then(response => {
        // Check if the response is successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        // Parse the JSON from the response
        return response.json();
    })
    .then(data => {
        // Handle the JSON data
        console.log(data);
    })
    .catch(error => {
        // Handle any errors that occurred during the fetch
        console.error('Error during fetch:', error);
    });

const personalSiteInfo = {}