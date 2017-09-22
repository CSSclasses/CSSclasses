(function (window) {
  var DARK = 'dark';
  var LIGHT = 'light';

  var highlightElements = [].slice.call(document.getElementsByClassName('highlight'));
  var syntaxSwitchElements = [].slice.call(document.getElementsByClassName('m-switch'));

  // Separating inputs from switch according to value for faster access
  var switches = syntaxSwitchElements.map(function (item){
    var inputs = item.querySelectorAll('input');

    return {
      node: item,
      options: {
        dark: inputs[0],
        light: inputs[1]
      }
    }
  });

  function setSwitches(value) {
    switches.forEach(function(item){
      item.options[value].checked = true;
    });
  }

  function setThemes(themer) {
    highlightElements.forEach(themer);
  }

  function syntaxLight(element) {
    element.classList.add('is--light');
    element.classList.remove('is--dark');
  }

  function syntaxDark(element) {
    element.classList.add('is--dark');
    element.classList.remove('is--light');
  }

  function handleChange(e) {
    var value = e.target.value;

    if (value === DARK) {
      setThemes(syntaxDark);
      setSwitches(value);
    } else if (value === LIGHT) {
      setThemes(syntaxLight);
      setSwitches(value);
    }
  }

  window.addEventListener('change', handleChange);
})(window);
