---
layout: post
title: "CSS Transitions"
---

### Transform

Transforms can be used to manipulate elements. You can take any element and add one or many transforms to it, including `translate` (moving the element), `scale` (make it bigger/smaller), `skew` (distort the element) and many more. All these transforms happen without disturbing the rendering flow. What does that mean? If you have an element that is a 100px square and you add `transform: scale(2);` to it, it is now scaled up to be a 200px square element, but all other elements around it stay in their positions. If instead you double width and height of your element, that will push other elements away.

Let’s go through these one by one. `translate` can be used in two different ways:

{% include switch.html %}

{% highlight CSS %}
.movedownright {
  transform: translate(10px, 20px);
}
.movedownright2 {
  transform: translateX(10px) translateY(20px);
}
{% endhighlight %}

Both classes `.movedownright` and `.movedownright2` manipulate any element in the same way: move it 10px right and 20px down. Negative values (e.g. -10px) would move it left or up. `.movedownright` uses a shorthand syntax for translateX and translateY, `.movedownright2` uses the individual `translateX` and `translateY` transforms. Notice how you can add several transforms by just leaving a space between them.

`scale` can be used to scale elements up or down, where `transform: scale(0);` means the element is gone, `transform: scale(0.5);` scales it down to 50% of the original size and `transform: scale(2);` doubles the size to 200%.

Using `skew` or `skewX` and `skewY` you can skew your elements by given angles on the x- or y-axis. With rotate you can `rotate` your elements by a given angle.

{% include switch.html %}

{% highlight CSS %}
.skewme {
  transform: skew(20deg, 30deg);
}

/* .skewme2 does the same as .skewme */
.skewme2 {
  transform: skewX(20deg) skewY(30deg);
}

.rotateme {
  transform: rotate(30deg);
}
{% endhighlight %}

Now here is an example of using several transforms at once, but only on `:hover` when you move the cursor over an element (notice how we are very happy to use transitions again as well):

<p data-height="481" data-theme-id="17669" data-slug-hash="jPJNNo" data-default-tab="result" data-user="verpixelt" class='codepen'>See the Pen <a href='http://codepen.io/verpixelt/pen/jPJNNo/'>jPJNNo</a> by Kevin Lorenz (<a href='http://codepen.io/verpixelt'>@verpixelt</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
