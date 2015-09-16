---
layout: post
title: "CSS Box Model"
---

### The Box Model
The Box Model is something that describes how all of these boxes behave, and how the browser knows about the space they occupy on a page.

We’ve told you that you can specify width, height and borders, but there’s more than that. You can also specify a `padding`, which is some space between your content and the edge of the box. And you can specify a `margin`, which is the size between the box and it's neighboring boxes.

Here’s an example with all of these properties so you can see how they behave. Note that the content is 5px away from the border, and that the boxes are 10px away from each other.

<p data-height="345" data-theme-id="17669" data-slug-hash="WvPVwz" data-default-tab="result" data-user="verpixelt" class='codepen'>See the Pen <a href='http://codepen.io/verpixelt/pen/WvPVwz/'>WvPVwz</a> by Kevin Lorenz (<a href='http://codepen.io/verpixelt'>@verpixelt</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

And here you can see how these different properties compose a box:

<figure>
  <img src="{{site.baseurl}}/assets/images/box-model.png" alt="A visualization of the box model.">
  <figcaption>
    <p>A visualization of the box model.</p>
  </figcaption>
</figure>

 Now, how much space does this box occupy on a page? We need to take into account not just the width and the height that was specified, but also the paddings and the borders (we can forget about the margins for now). So in reality, our box occupies a width of 80px plus 5px on each side for the paddings, plus 1px for each border (note we're using the border shorthand). So that means that the real width is 92px.

 There is a way to make the box model work differently, so that you don't need to do these kinds of calculations, using the box-sizing property: `box-sizing: border-box;`.

 <p data-height="437" data-theme-id="17669" data-slug-hash="pJGMdq" data-default-tab="result" data-user="verpixelt" class='codepen'>See the Pen <a href='http://codepen.io/verpixelt/pen/pJGMdq/'>pJGMdq</a> by Kevin Lorenz (<a href='http://codepen.io/verpixelt'>@verpixelt</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
 <script async src="//assets.codepen.io/assets/embed/ei.js"></script>

 If you specify that, now your box will actually occupy just 80px, as the borders and paddings become part of the box. This usually makes it easier to understand, so we suggest you use it.
