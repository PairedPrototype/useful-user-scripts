// ==UserScript==
// @name        Take me to Amazon Smile always!
// @description Redirects you to the Amazon Smile domain if you find yourself on the normal site. I'm not sure why Amazon can't just support charities anyway, but here we are, needing a more convenient way to help us do that.
// @version     1.0.0
// @updateURL   https://raw.githubusercontent.com/PairedPrototype/useful-user-scripts/master/src/scripts/amazon/take-me-to-amazon-smile-always.js
// @downloadURL https://raw.githubusercontent.com/PairedPrototype/useful-user-scripts/master/src/scripts/amazon/take-me-to-amazon-smile-always.js
// @namespace   https://github.com/PairedPrototype/useful-user-scripts
// @include     /.*:\/\/(www\.|)amazon\.(com|co.uk|de)\/.*/
// @exclude     *://smile.amazon.*/*
// @author      PairedPrototype
// @supportURL  https://github.com/PairedPrototype/useful-user-scripts/issues
// @grant       none
// ==/UserScript==

(() => {
  'use strict';

  window.location = `https://${window.location.host.replace('www', 'smile')}${window.location.pathname}`;
})();
