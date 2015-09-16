---
layout: post
title: "CSS Transitions"
---

### Transition
Transitions are a nice way to add some interactive animations to your site. If you add a transition to an element, the browser will automatically animate between two states when they change. To try that you can combine what you just learned about classes and `:hover` and add the `transition` property to the mix:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<head>
<!-- ... -->
  <style type="text/css">
    .changeonhover {
      color: white;
      background-color: green;
      text-align: center;
      width: 300px;
      height: 200px;
      font-family: sans-serif;
      border: 5px solid black;
      transition: 1s all;
    }
    .changeonhover:hover {
      background-color: blue;
      width: 600px;
      height: 300px;
    }
  </style>
</head>
<body>
  <div class="changeonhover">Hover me! Hover Me!</div>
</body>
{% endhighlight %}

Notice how you did not need to define an animation but still the browser animates between the two states? All we did is insert `transition: 1s all;` which is the transition shorthand with just the first two values that are a `transition-duration` of 1 second and the `transition-property` of `all` which means the browser will animate between all properties that have changed. You could also define different transitions for different properties, separated by a comma. Let’s go a little overboard with that and also use the other transition values:

<p data-height="458" data-theme-id="17669" data-slug-hash="YXBmgx" data-default-tab="result" data-user="verpixelt" class='codepen'>See the Pen <a href='http://codepen.io/verpixelt/pen/YXBmgx/'>YXBmgx</a> by Kevin Lorenz (<a href='http://codepen.io/verpixelt'>@verpixelt</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

Notice how we used a very complicated transition shorthand here:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight CSS %}
transition: 1s width 0.2s ease-out, 2s background-color, 0.5s height 0.5s;
{% endhighlight %}

Let’s break it down: `1s width 0.2s ease-out` are the values that define the transition just for the width. The shorthand syntax is:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight CSS %}
transition: transition-duration transition-property transition-delay transition-timing-function;
{% endhighlight %}


So in our example the width gets transitioned for one second, but only after a 0.2 second delay with a timing function of ease-out. And then you use a comma and define the transition for the next property if you want to. Phew, sounds complicated, right? But as you can see in the example, you don’t always need to define all values, as they will have default values, as the 2s background-color transition shows. Don’t worry. It’s ok to look this up every time until you remember it.
