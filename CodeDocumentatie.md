# Documentatie persoonlijke eenden website Justin Prins

## 1. Introductie 
## 2. HTML Structuur 
## 3. CSS Styling
## 4. JavaScript
## 5. Aanvullingen

### 1. Introductie
Dit document bevat documentatie voor mijn code die ik heb gemaakt tijdens het vak Web App From Scratch. De webpagina is een persoonlijke pagina van het eendje. De webpagina is gemaakt om te oefenene met API's, JSON.files en mijn vaardigheden in CSS, HTML en Javascript te verbeteren.


### 2. HTML Structuur
2.1 Document structuur
Het HTML document bevat een header,main en een footer

2.2 Header
De header bevat een fixed nav met een mijn naam "Justin Prins" en een eenden icoon. Het icoontje is klikbaar en scrollt je naar de button die ervoor zorgt dat je een random eenden foto te zien krijgt.

2.3 Main 
De main is onderverdeel in 3 verschillende secties.

Sectie 1
Deze sectie laat een png afbeelding zien van het eendje wat ik bij de introductie van de minor heb ontvangen. Onder het eendje staan buttons, wanneer je op de buttons klikt verschijnt er informatie over het eendje in het vakje naast het eendje. De informatie komt vanuit een JSON.file.

Sectie 2
Deze sectie bevat wat aanvullende tekt over het eendje. De tekt is gegenereerd door chatgpt. Naast de text staat een button en een afbeelding. 
De button is gelinkt met een Unsplash API wanneer je op de button klikt zal er een willekeurig afbeelding van een een in de figure verschijnen.

Sectie 3
Deze sectie bevat 3 karakter waarop de eend op zou willen poepen. Wanneer je op een bepaalde VH komt binnen de webpagina zullen de karatkers een klein beetje bewegen.

2.4 Footer
De footer bevat contact informatie ook deze tekst is gegenereerd door chatgpt.

### 3. CSS Styling
The CSS file (style.css) is organized with various sections to style different elements. Key styling points include:

Background color for the HTML and body.
Styling for headings (h1, h2, h3, h6) and paragraphs (p).
Styling for buttons, navigation bar, and podium section.
Responsive design using media queries for different screen sizes.
### 4. JavaScript
The JavaScript file (script.js) contains logic for fetching data from an external JSON file, toggling the display of information based on button clicks, and fetching random duck images from the Unsplash API. It also includes a scroll event listener to animate the podium section when scrolled into view.

### 5. Aanvullingen
The code includes comments for better readability.
External libraries or frameworks are not used; the web app is built with HTML, CSS, and vanilla JavaScript.
The project relies on external data, specifically a JSON file for character properties and the Unsplash API for random duck images.
Feel free to expand and customize this documentation based on your specific needs and additional details about the project.