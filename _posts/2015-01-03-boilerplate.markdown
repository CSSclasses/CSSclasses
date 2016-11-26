---
layout: post
title: "Boilerplate"
---

## Basic HTML & HTML boilerplate
* [Elements and Tags](#elements-and-tags)
* [Pageflow](#pageflow)
* [HTML Boilerplate](#html-boilerplate)
* [(Practical) Elements](#practical-elements)

### Elements and Tags
Elements and Tags are the building blocks of HTML.

Elements are what makes up a HTML document. You can put elements inside of other elements. An element can include three things: a tag, attributes, and content.

A Tag is the thing that indicates an element’s purpose. For example, the `<p>` tag indicates a paragraph of text is in that element, and the `<li>` represents a ‘list item’. You’ll notice they’re always surrounded by angle brackets. Opening and Closing tags mark the beginning and end of an element and wrap its content, like so:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<p>This is a paragraph.</p>
{% endhighlight %}

You can see the closing tag includes a `/` before its name; otherwise it would be another opening tag!

Always double-check that you’ve closed all your elements; otherwise, a browser can and will get mixed up trying to understand your HTML document.

Lastly, having elements inside of each other (“nesting”) looks just like this:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<p>This is a sentence, with an <em>em</em> element ("emphasize") inside of it.</p>
{% endhighlight %}

or this:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<div id="main-container">
  <h1>The h1 tag indicates the primary header of the document.</h1>
  <p>Some text.</p>
</div>
{% endhighlight %}

In the above example, you can see our first case of an attribute. It starts with a lowercase name, and then is almost always followed by an = and a ‘value’ that’s surrounded in double quotes, "like this". An element can have many attributes, in which case you separate them by spaces, as you’ll see soon. Attributes give information about an element in particular.

### Pageflow
In most circumstances "normal flow" is the way that elements are laid out on a web page. Every element in HTML is inside a rectangular box. Shown on the picture below.

<figure>
  <img src="{{site.baseurl}}/assets/images/pageflow.png" alt="Screenshot of the CSSclasses GitHub page with elements highlighted with black borders.">
  <figcaption>
    <p>Every element on the page highlighted.</p>
  </figcaption>
</figure>

In our example, each of these boxes are one of two different types: **inline boxes** or **block boxes**. So what exactly does this mean? Let’s start with block boxes.

**Block boxes** are stacked vertically one after the other in the order they’ve been written in the HTML file, and they usually occupy the whole width of the page. They normally start in the upper left corner and go down to the bottom.

Here is a simple example. Don’t get confused by the additional CSS. It’s just there for the purpose of making the boxes visible.

<p data-height="765" data-theme-id="17669" data-slug-hash="tmcHC" data-default-tab="result" data-user="verpixelt" class='codepen'>See the Pen <a href='http://codepen.io/verpixelt/pen/tmcHC/'>CSSClasses Block Boxes</a> by Kevin Lorenz (<a href='http://codepen.io/verpixelt'>@verpixelt</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

**Inline Boxes** work a bit differently. These boxes will also start at the upper left corner, but will arrange themselves horizontally.

Here’s an example of that as well.

<p data-height="256" data-theme-id="17669" data-slug-hash="rtvGu" data-default-tab="result" data-user="verpixelt" class='codepen'>See the Pen <a href='http://codepen.io/verpixelt/pen/rtvGu/'>CSSClasses inline box</a> by Kevin Lorenz (<a href='http://codepen.io/verpixelt'>@verpixelt</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

So HTML elements are by default either **block boxes** or **inline boxes** (of course, there are exceptions to this rule, but we don’t have to worry about that for now). For example, `div` is a block element, and so are headings like `h1` or `h2`. `span` or `strong` on the other hand are **inline elements**. Here are lists for the different elements:

* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements" target="_blank">Block-level elements</a>
* <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elemente" target="_blank">Inline elements</a>

For now just keep in mind, that every box has some sort of display value.

### HTML Boilerplate
There is some basic structure you don't need to spend too much time on that is always there. Let's handle this in a very quick walkthrough (code, line-by-line comments):

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<!DOCTYPE html>
<!--This is a doctype. Every HTML file should have one.
Basically you only need this one nowadays, as this means HTML5 (what you're learning here)
for modern browsers but old browsers still pick up that your file is some kind of HTML.-->
<html>
<!-- Here the HTML starts, so we put an opening <html> tag here. -->
  <head>
<!-- Inside the <head> we can put some meta information… -->
    <meta charset="UTF-8">
    <title>Our Page Title</title>
<!-- … like charset and title. -->
  </head>
<!-- And we close our <head> element and open the <body>, where the actual content goes. -->
  <body>
    <h1>Hello world!</h1>
  </body>
</html>
<!-- And in the end we close the <body> and <html> tag. -->
{% endhighlight %}

And there we are, this is our first valid HTML file! Here it is again, so you can neatly copy&paste it:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Our Page Title</title>
  </head>
  <body>
    <h1>Hello world!</h1>
    <!-- put all the content here! -->
  </body>
</html>
{% endhighlight %}

Are you looking for a place to put your CSS? Don't rush, we will come to that. At the moment, we are looking at HTML only. If you know what you are doing, you can skip over to the <a href="#start-with-inline-styles">CSS</a> part.

### (Practical) Elements

#### Headings (h1-h6)

There is a hierarchy of heading elements that you can use for headlines. They start with h1 and end with h6.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<h1>heading 1</h1>
<h2>heading 2</h2>
<h3>heading 3</h3>
<h4>heading 4</h4>
<h5>heading 5</h5>
<h6>heading 6</h6>
{% endhighlight %}

#### Paragraph
This is the perfect tag if you want to markup text. Even this text is wrapped in a p.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<p>Some text</p>
{% endhighlight %}

#### Strong, em, break
These are some inline Elements that you can nest inside a paragraph. Strong and emphasis give some meaning to pieces of text, while break forces a
linebreak.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<strong>Strong</strong> and <em>emphasis</em>,
<br>break
{% endhighlight %}

#### Images
The image tag is special as it is self-closing, it has no closing tag (like the break tag). It also has a special attribute the src which carries the path to the actual image. The alt attribute is a placeholder, if for some reason the image does not load.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<img src="https://placehold.it/664x442" alt="placeholder image">
{% endhighlight %}
<img src="https://placehold.it/664x442" alt="placeholder image">

#### Links
Links take the user to another page. The tag is simply an a which stands for anchor. It comes with the href (hyper reference) attribute, that tells the browser where to go to. You can also add a title attribute that shows once the user hovers over it.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<a href="http://cssconf.eu" title="CSSconf EU">CSSconfEU</a>
{% endhighlight %}

#### Div
The div element is an element that does not have any special meaning or special styling. It’s perfect for grouping other elements together and assigning them a class or an id.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<div>I do nothing special</div>
{% endhighlight %}
