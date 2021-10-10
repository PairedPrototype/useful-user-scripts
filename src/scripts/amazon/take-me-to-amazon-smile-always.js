// ==UserScript==
// @name        Take me to Amazon Smile always!
// @namespace   https://github.com/PairedPrototype/useful-user-scripts
// @version     1.0.0
// @description Redirects you to the Amazon Smile domain if you find yourself on the normal site. I'm not sure why Amazon can't just support charities anyway, but here we are, needing a more convenient way to help us do that.
// @author      PairedPrototype
// @include     /.*:\/\/(www\.|)amazon\.(com|co.uk|de)\/.*/
// @exclude     *://smile.amazon.*/*
// @grant       none
// @supportURL  https://github.com/PairedPrototype/useful-user-scripts/issues
// ==/UserScript==

(() => {
  'use strict';

  window.location = `https://${window.location.host.replace('www', 'smile')}${window.location.pathname}`;
})();
