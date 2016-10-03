---
layout: post
title: "CSS Class Selector"
---

### Class Selector
Until now we used the element selector to apply styles to an element. What’s wrong with that? Nothing, until you want to have two or more differently styled `div`s on your page.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<head>
<!-- ... -->
  <style>
    div {
      color: white;
      background-color: green;
      width: 300px;
      height: 200px;
      font-family: sans-serif;
      border: 5px solid black;
    }
  </style>
</head>
<body>
  <div>I am a div with a border</div>
  <div>I am a different div but i look like the other one! 😞</div>
</body>
{% endhighlight %}

Copy this code example into your html file, and check out what it looks like in the browser. Now let’s say the second `div` should be blue. We can achieve that by assigning classes to the `divs in our HTML. We can then apply styles to each class in our CSS:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<head>
<!-- ... -->
  <style>
    div {
      width: 300px;
      height: 200px;
      font-family: sans-serif;
      border: 5px solid black;
    }

    .greenthing { background-color: green; }

    .bluething {
      background-color: blue;
      font-family: serif;
      text-align: center;
    }

    .border-dotted { border: 5px dotted black; }
  </style>
</head>
<body>
  <div class="greenthing">I am a div with a border</div>
  <div class="bluething border-dotted">I am a different div and I don’t look like the other one any more! 😀</div>
</body>
{% endhighlight %}

Now here you should note several things. Both `div`s get the styles of the `div` rule, as this applies to all `div`s. Then the first `div` also gets the styles of the class `.greenthing`. In HTML the classes get assigned by writing a class attribute inside of the opening tag of the element. The second `div` has two classes – you can assign as many of them as you want! Just separate them by a space. In the CSS code, class selectors are marked by a dot like this: `.border-dotted`. This class is remarkable as it `overrides` the border style that was defined in the `div selector.

