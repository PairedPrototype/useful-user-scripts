// ==UserScript==
// @name        Reddit - Copy Short Link
// @description Adds a button in the share menu on (new layout) Reddit posts to copy the short link (https://redd.it/example) instead of the super long link.
// @version     1.0.1
// @updateURL   https://github.com/PurplProto/useful-user-scripts/raw/master/src/scripts/reddit/copy-short-link.user.js
// @downloadURL https://github.com/PurplProto/useful-user-scripts/raw/master/src/scripts/reddit/copy-short-link.user.js
// @namespace   https://github.com/PurplProto/useful-user-scripts
// @include     /.*:\/\/(www\.|)reddit\.com\/.*/
// @exclude     *://old.reddit.com/*
// @author      PurplProto
// @supportURL  https://github.com/PurplProto/useful-user-scripts/issues
// @icon        https://www.reddit.com/favicon.ico
// @grant       GM.setClipboard
// ==/UserScript==

// Make formatting log messages easier
function doLog(message, formatting = []) {
  console.log(`%c[PurplProto -> Copy Short Link]%c: ${message}`, 'color: BlueViolet', 'color: unset', ...formatting);
}

// Check if we've added the short link button
function isShortLinkAdded(menuElement) {
  return menuElement.firstChild.textContent === 'Copy Short Link';
}

// Build short link
function buildShortLink() {
  const postId = window.location.pathname.split('/')[4];
  return `https://redd.it/${postId}`;
}

// Add the short link to the clipboard
function addShortLinkToClipboard() {
  const shortLink = buildShortLink();
  GM.setClipboard(shortLink, { type: 'text', mimetype: 'text/plain' });
  doLog(`%cCopied short link to the clipboard: %c${shortLink}`, ['color: green', 'color: white']);
}

(() => {
  'use strict';

  doLog('Loading...');

  // Add a 'Copy Short Link' button to the Share menu
  const prependShortLinkButton = (menuElement) => {
    // Clone the 'Copy Link' button so we keep the same styling
    const shortLinkButton = menuElement.firstChild.cloneNode(true);
    // Also clone the link icon
    const linkIcon = menuElement.firstChild.firstChild.cloneNode(true);

    // Add click handler
    shortLinkButton.addEventListener('click', addShortLinkToClipboard);

    // Modify the text, add the link icon and then prepend it to the menu
    shortLinkButton.textContent = 'Copy Short Link';
    shortLinkButton.prepend(linkIcon);
    menuElement.prepend(shortLinkButton);
  };

  // Process new document mutation events
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      const menuElement = document.querySelector('[role="menu"]');

      const newElementsAdded = mutation.type === 'childList';
      if (newElementsAdded && !!menuElement && !isShortLinkAdded(menuElement)) {
        doLog('%cwe found the menu', ['color: green']);
        prependShortLinkButton(menuElement);
      }
    }
  });

  // Observe new elements added to the document
  observer.observe(document.body, { childList: true, subtree: true });
  doLog('%cLoaded.', ['color: green']);
})();
