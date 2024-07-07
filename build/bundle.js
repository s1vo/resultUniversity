
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var titleText = document.createElement('h1');
  titleText.innerHTML = 'I love JavaScript';
  var imgProgramming = document.createElement('img');
  imgProgramming.src = './assets/js.jpeg';
  imgProgramming.alt = 'Javascript logo';
  document.body.appendChild(titleText);
  document.body.appendChild(imgProgramming);
});
