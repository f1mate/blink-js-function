/**
 * File Name     : script.js
 * Published by  : F1Mate
 * Publisher URL : https://f1mate.com
 * Contributors  : f1mate, 1amitgupta (Github)
 * Version       : v1.01
 * LICENSE       : MIT License, Copyright (c) 2020 F1 Mate (f1mate)
 * Github URL    : https://github.com/f1mate/blink-js-function
 */

/**
 * 
 * @param {String} ele_id <p>Element ID</p>
 */
function blinkJs(ele_id) {
  var f = document.getElementById(ele_id);
  if (f) {
    setInterval(function() {
      f.style.visibility = (f.style.visibility == 'hidden' ? '' : 'hidden');
    }, 1000);
  }
}
