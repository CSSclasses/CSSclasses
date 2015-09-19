var highlightElements;

document.addEventListener("DOMContentLoaded", function(event) {
  highlightElements = document.getElementsByClassName('highlight');

  syntaxSwitchElements = document.getElementsByClassName('m-switch');

  for (var i = 0; i < syntaxSwitchElements.length; ++i) {
    syntaxSwitchElements[i].classList.add('highlight');
    syntaxLight(syntaxSwitchElements[i]);
  }
});

var lightenEverything = function lightenEverything() {
  for (var i = 0; i < highlightElements.length; ++i) {
    syntaxLight(highlightElements[i]);
  }
}

var darkenEverything = function darkenEverything() {
  for (var i = 0; i < highlightElements.length; ++i) {
    syntaxDark(highlightElements[i]);
  }
}

var syntaxLight = function syntaxLight(element) {
  element.classList.add('is--light');
  element.classList.remove('is--dark');
}

var syntaxDark = function syntaxDark(element) {
  element.classList.add('is--dark');
  element.classList.remove('is--light');
}