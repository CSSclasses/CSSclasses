(function(window) {
  var highlightElements = document.getElementsByClassName('highlight');

  syntaxSwitchElements = document.getElementsByClassName('m-switch');

  for (var i = 0; i < syntaxSwitchElements.length; ++i) {
    syntaxSwitchElements[i].classList.add('highlight');
    syntaxLight(syntaxSwitchElements[i]);
  }

  window.lightenEverything = function lightenEverything() {
    for (var i = 0; i < highlightElements.length; ++i) {
      syntaxLight(highlightElements[i]);
    }
  }

  window.darkenEverything = function darkenEverything() {
    for (var i = 0; i < highlightElements.length; ++i) {
      syntaxDark(highlightElements[i]);
    }
  }

  function syntaxLight(element) {
    element.classList.add('is--light');
    element.classList.remove('is--dark');
  }

  function syntaxDark(element) {
    element.classList.add('is--dark');
    element.classList.remove('is--light');
  }
})(window);
