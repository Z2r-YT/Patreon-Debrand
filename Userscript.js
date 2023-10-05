// ==UserScript==
// @name         Patreon Debrand
// @namespace    https://github.com/Z2r-YT/Patreon-Debrand/
// @version      1.0
// @description  A userscript to get rid of the new kidney-shaped patreon, because we are already giving one kidney to our favourite creators.
// @author       Liam "Z2r"
// @match        https://www.patreon.com/*
// @icon         https://z2r-yt.github.io/Patreon-Debrand/src/PatreonFaviconClassic.ico
// @grant        none
// @license      MIT
// ==/UserScript==
(function() {
    'use strict';

    // Create a new link element for the new favicon
    var newFavicon = document.createElement('link');
    newFavicon.rel = 'icon';
    newFavicon.href = 'https://z2r-yt.github.io/Patreon-Debrand/src/PatreonFaviconClassic.ico';

    // Remove the existing favicon (if any)
    var existingFavicon = document.querySelector('link[rel="icon"]');
    if (existingFavicon) {
        existingFavicon.parentNode.removeChild(existingFavicon);
    }

    // Add the new favicon to the document head
    document.head.appendChild(newFavicon);

    // Replace Sidebar Logo

    // Find all elements with class "ldamNw"
    var elements = document.querySelectorAll('.ldamNw');

    // Loop through each found element
    elements.forEach(function(element) {
        // Create a new img element
        var imgElement = document.createElement('img');

        // Set the img source
        imgElement.setAttribute('src', 'https://z2r-yt.github.io/Patreon-Debrand/src/ClassicIconGrey.svg');

        // Replace the SVG child element with the <img> element
        element.innerHTML = ''; // Remove existing content
        element.appendChild(imgElement); // Add the <img> element as a child
    });

    console.log("%c Debranded!", "font-weight: bold; font-size: 50px;color: black; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113); margin-bottom: 12px; padding: 5%");

})();
