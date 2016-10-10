---
layout: post
title: "Cascade and Inheritance"
---

### Cascade and Inheritance

As the name Cascading Style Sheets suggests, CSS specifies the _styles_ for a document in a _cascading_ manner. But what exactly does _cascading_ mean?

First it is important to understand that most elements in a document are subject to more than one style declaration. Sometimes these declarations are conflicting. If one declaration says an element should be red and another one says it should be green, the browser can only apply one of them.

The set of rules that determines which of these conflicting declarations to apply is called the _cascade_.

#### The User Agent Stylesheet

Every stylesheet that you, the _author_, add to a website, is called an _author stylesheet_.

Every browser, or _user agent_, also has its own _user agent stylesheet_. It makes sure that every document always has some sensible default styling, even without you writing a single line of CSS.

Thanks to the user agent stylesheet, all headlines have a bigger font size, and every link is blue and underlined. While these defaults are very useful, the rules of the cascade make sure that you can always overwrite them in your own author stylesheets.

If the user agent stylesheet says all links should be blue, but your author stylesheet says all links should be red, all links will be red.

#### Overwriting your own styles

The cascade is also important for when you want to overwrite your own styles. But why would you want to overwrite your own styles?

Imagine you are styling a document with some paragraphs. All these paragraphs should have green text, but one of them contains a warning, and should therefore be red.

Here is one way to do this:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<head>
  <style>
    p {
      color: green;
    }
    .warning {
      color: red;
    }
  </style>
</head>
<body>
  <p>I am a normal green paragraph of text.</p>
  <p>I am another normal green paragraph of text.</p>
  <p class="warning">Warning! I am a red paragraph of text!</p>
</body>
{% endhighlight %}

In this example, the first rule specifies that all paragraphs have green text. The second rule overwrites the first rule wherever `class="warning"` is applied.

This is a good example why you would want to overwrite your own styles: Apply generic default styles for all elements first, then overwrite some of them to create exceptions.

If you think that is all very complicated, you are not wrong. Thankfully, computers are much better at figuring these things out than humans.

#### Developer Tools to the rescue

Developer tools are our best friends when building websites. They can give us a lot of feedback about the elements on a web page.

One great developer tool in all modern browsers is the _element inspector_.

If you right click anywhere on website, you should see an option like "inspect" or "inspect element" in your browser's context menu. This should bring up the developer tools panel.

Then click the _inspect element_ button in the developer tools panel, and after that click the element on the page that you want to inspect. Here is an animated gif of what that looks like in Google Chrome:

<figure>
  <img src="{{site.baseurl}}/assets/images/inspect-element.gif" alt="Animated gif of inspecting an element in Google Chrome">
  <figcaption>
    <p>The element inspector in Google Chrome Developer Tools</p>
  </figcaption>
</figure>

Inspecting an element will tell you a lot of useful things. For example you can see which styles are assigned to the element in the styles panel.

<figure>
  <img src="{{site.baseurl}}/assets/images/inspect-element.png" alt="Image of the styles panel in Google Chrome Developer Tools">
  <figcaption>
    <p>The styles panel shows you what styles are applied to an element and where to find them.</p>
    <p>It also indicates overwritten styles as <strike>striked out</strike></p>
  </figcaption>
</figure>

#### Parents, Children, Siblings, Inheritance

When we talk about an HTML document, we often describe it as a family tree. When an element stands between the opening tag and the closing tag of another element, it is _wrapped_ inside another element. Elements that are wrapped inside another element are also called _children_. The tree of elements in a document is also called the _[DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)_, and the elements in the tree are called _DOM nodes_.

Consider the following document:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<html>
  <body>
    <main>
      <h2>Web Browsers</h2>
      <p>Firefox is Mozilla's web browser.</p>
      <p>Chrome is Google's web browser.</p>
      <p>Safari is Apple's web browser.</p>
      <p>Edge is Microsoft's web browser.</p>
    </main>
    <footer>
      <h3>Learn more</h3>
      <p>Read the Wikipedia article about web browsers</p>
    </footer>
  </body>
</html>
{% endhighlight %}

For this document, the following statements are true:

- `h2` is a child of `main`
- `footer` is a child of `body`
- `h2` is a sibling of `p`
- `h2` has four siblings
- `main` is a parent of `h2`
- `main` has five children
- `h2` and `main` are descendants of `body`
- `html` and `body` are ancestors of `p`
- `main` and `footer` are wrapped inside a `body`-element
- The `html`-element is wrapped around the `body`-element

One way we can make use of these relationships in our CSS is through _inheritance_. Inheritance means that some CSS properties, like text color or font size, get passed down, or _inherited_ from parent to children and further descendants. So if we want all the text in our document to be green, instead of styling every single element we can add the following CSS:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight CSS %}
body {
  color: green;
}
{% endhighlight %}

All visible elements in an HTML document are descendants of the body element. Therefore the color green now applies to every element on the page, as long as the element doesn't have its own color property value.

Now let's make this document a bit more interesting:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<html>
  <head>
    <style>
      body {
        color: green;
      }
      footer {
        background-color: green;
        color: white;
      }
    </style>
  </head>
  <body>
    <main>
      <h2>Web Browsers</h2>
      <p><a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a> is Mozilla's web browser.</p>
      <p><a href="https://www.google.com/chrome/">Chrome</a> is Google's web browser.</p>
      <p><a href="http://www.apple.com/lae/safari/">Safari</a> is Apple's web browser.</p>
      <p><a href="https://www.microsoft.com/en-us/windows/microsoft-edge">Edge</a> is Microsoft's web browser.</p>
    </main>
    <footer>
      <h3>Learn more</h3>
      <p>Read the <a href="https://en.wikipedia.org/wiki/Web_browser">Wikipedia article about web browsers</a></p>
    </footer>
  </body>
</html>
{% endhighlight %}

In this document, all elements without a specified text color will inherit the green text color from the `body`-element. The `footer` has its own white text color that overwrites the green text color from the `body`-element. It also has a green background color.

You will notice that the `a`-elements don't inherit the text color of their ancestors. That is because the `a`-element has its own blue text color specified in the user agent style sheet.

Unfortunately, blue on green is not very readable. It might be a good idea to change the link color for the `footer` by adding the following CSS:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight CSS %}
footer a {
  color: white;
  text-decoration: underline;
}
{% endhighlight %}

You might wonder why there is an empty space between `footer` and `a` in the `footer a` selector. This empty space is called [descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_selectors). The descendant combinator lets you select elements that are descendants of another element.

This becomes a bit clearer when you read the selectors from right to left. `footer a` will select every `a` element, that is a _descendant_ of a `footer`-element. You can also combine more selectors. For example `footer h2 a` would select every link inside of a level two headline that is inside of a footer.

Knowing this we can make sure that all our links inside the footer have a white text color. We also want to make sure that they are underlined with `text-decoration: underline;`. This way people can still recognize that they are links, not just regular text.

#### The `inherit` keyword

This is all well and good, but what if we decide to change the text color in our footer from white to yellow? In our example we would have to change the `color` values for `footer` _and_ `footer a` to yellow to achieve this. Ugh, so much work!

Thankfully, there is the `inherit` keyword.

The `inherit` keyword forces some attributes, like color, to be _inherited_ from the parent element. So in our example we could give our `footer a` the property value `color: inherit;`. This way the links inside our footer are always the same color as the text in our footer.

There is also the newer `currentcolor` keyword. `currentcolor` always represents the text color of a certain element. If you want to change another attribute than `color` to that same element's text color, you could do that with a declaration like `border-color: currentcolor`.

#### Specificity

Specificity means that a rule that is _more specific_ overpowers a rule that is _less specific_. For example selecting every link inside a footer element with `footer a` is _more specific_ than selecting every link element everywhere with `a`.

Some selectors are more specific by default. For example a _class selector_ will always have a higher specificity than an _element selector_. This makes sense, because selecting only elements with a certain class attribute is _more specific_ than selecting _every_ element of a type.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<html>
  <head>
    <style>
      a {
        color: blue;
      }
      body a {
        color: green;
      }
      .danger-link {
        color: red;
      }
    </style>
  </head>
  <body>
    <a class="danger-link" href="danger.html">I am a very dangerous link, do not click me!</a>
  </body>
</html>
{% endhighlight %}

In this example the link will end up red. The first rule for `a` will be overwritten by the _more specific_ rule `body a`.

The class selector `.danger-link` is even more specific, therefore it overwrites them both.

It is important to keep in mind that in the cascade _specificity beats the order_ of rules in your stylesheet. If a rule is followed by another rule with the _same specificity_, the second rule overwrites the first. If the first rule has a _higher specificity_, the first rule still overwrites any less specific rules that come after it.

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight HTML %}
<html>
  <head>
    <style>
      body p {
        color: green;
      }
      p {
        color: blue;
      }
    </style>
  </head>
  <body>
    <p>I am a green paragraph of text because "body p" is more specific than "p"</p>
  </body>
</html>
{% endhighlight %}

Most of the time you don't need to think about specificity too much, but sometimes high specificity can cause bugs or unexpected behavior. You can prevent this by avoiding overly specific selectors, like `.site-header nav ul li a`. If you want to read more about this, the Mozilla Developer Network has a [more detailed article on specificity](https://developer.mozilla.org/en/docs/Web/CSS/Specificity).
