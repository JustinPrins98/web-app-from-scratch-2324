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

Dingen waar ik vooral mee gewerkt heb binnen CSS tijdens deze opdracht zijn.

Flexboxes: Voorheen gebruikte ik niet zo vaak flexboxen en was ik slecht in het plaatsen van elementen. Ik heb bij het maken van deze CSS veel gewerkt met flexboxes om elementen te plaatsen en flex-wrap om elementen responsive te maken.

Media Queries: Media Queries heb ik nooit eerder toegepast in CSS. Dit keer moest ik het wel gebruiken omdat ik op een bepaald breakpoint de tekst onder elkaar moest krijgen. Dit heeft geholpen om de pagina responsive te krijgen en heeft mij de basis van media queries geleerd.

Hover states: Om buttons te stylen wanneer je erover heen hoverd.

Wat ik de volgende keer anders kan doen.
costum variables en benamingen: De volgende keer wil ik costum variabelen toevoegen om makkelijker de styling aan te passen eventueel een darkmode toe te voegen. Ook wil ik mijn classnames verbeteren om mijn CSS meer structuur te geven waardoor het voor mij en voor anderen overzichtelijker wordt.

### 4. JavaScript
De jS bevat een functie die data van een externe JSON file ophaalt. De data wordt weeregeven door op buttons te klikken. 

Ook bevat het een functie die ervoor zorgt dat er willekeurige eenden foto's verschijnen wanneer je op een specefieke button klikt. Deze foto's komen vanuit een Unsplash API. 

De javascript bevat ook een scroll event listener om de 3e sectie te animeren wanneer het in beeld komt.

### 5. Aanvullingen
De code bevat comments om de overzichtelijkheid te bevorderen.
De Web app is gebouwd met HTML, CSS en vanilla JavaScript.
De Web app maakt gebruik van externa data zoals JSON files en een Unsplash API.