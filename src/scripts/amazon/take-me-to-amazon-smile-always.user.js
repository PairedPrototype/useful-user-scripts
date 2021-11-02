// ==UserScript==
// @name        Amazon - Take me to Amazon Smile always!
// @description Redirects you to the Amazon Smile domain if you find yourself on the normal site. I'm not sure why Amazon can't just support charities anyway, but here we are, needing a more convenient way to help us do that.
// @version     1.0.2
// @updateURL   https://github.com/PurplProto/useful-user-scripts/raw/master/src/scripts/amazon/take-me-to-amazon-smile-always.user.js
// @downloadURL https://github.com/PurplProto/useful-user-scripts/raw/master/src/scripts/amazon/take-me-to-amazon-smile-always.user.js
// @namespace   https://github.com/PurplProto/useful-user-scripts
// @include     /.*:\/\/(www\.|)amazon\.(com|co.uk|de)\/.*/
// @exclude     *://smile.amazon.*/*
// @author      PurplProto
// @supportURL  https://github.com/PurplProto/useful-user-scripts/issues
// @icon        https://www.amazon.com/favicon.ico
// @grant       none
// ==/UserScript==

(() => {
  'use strict';

  window.location = `https://${window.location.host.replace('www', 'smile')}${window.location.pathname}`;
})();
