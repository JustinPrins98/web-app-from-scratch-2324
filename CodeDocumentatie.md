Web App Documentation
Table of Contents
Introduction
HTML Structure
CSS Styling
JavaScript Logic
Additional Notes
1. Introduction<a name="introduction"></a>
This document provides documentation for the codebase of the "Web App From Scratch 23-24". The web app features a personal page for "Justin Prins" and introduces a character named "Mcduck". It includes sections displaying information about the character, a podium section with top individuals, and a footer with contact details.

2. HTML Structure<a name="html-structure"></a>
2.1 Document Structure
The HTML document is structured with typical HTML5 elements. It includes sections for the header, main content, and footer.

2.2 Header
The header contains a navigation bar with the name "Justin Prins" and an icon of a duck. The duck icon is clickable and scrolls to the section with the duck image.

2.3 Main Content
The main content consists of three sections:

2.3.1 Section 1
This section introduces the character "Mcduck" with an image, buttons to reveal various details, and an overlay for additional information.

2.3.2 Section 2
Provides additional information about "Mcduck" with text, an image, and a button to display a random duck image.

2.3.3 Section 3
A podium section displaying the top 3 individuals the character would "poop" on.

2.4 Footer
The footer includes a contact message with contact details.

3. CSS Styling<a name="css-styling"></a>
The CSS file (style.css) is organized with various sections to style different elements. Key styling points include:

Background color for the HTML and body.
Styling for headings (h1, h2, h3, h6) and paragraphs (p).
Styling for buttons, navigation bar, and podium section.
Responsive design using media queries for different screen sizes.
4. JavaScript Logic<a name="javascript-logic"></a>
The JavaScript file (script.js) contains logic for fetching data from an external JSON file, toggling the display of information based on button clicks, and fetching random duck images from the Unsplash API. It also includes a scroll event listener to animate the podium section when scrolled into view.

5. Additional Notes<a name="additional-notes"></a>
The code includes comments for better readability.
External libraries or frameworks are not used; the web app is built with HTML, CSS, and vanilla JavaScript.
The project relies on external data, specifically a JSON file for character properties and the Unsplash API for random duck images.
Feel free to expand and customize this documentation based on your specific needs and additional details about the project.