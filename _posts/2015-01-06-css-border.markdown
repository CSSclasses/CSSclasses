---
layout: post
title: "CSS Border Properties"
---

### Border
You can also put a nice `border` around your elements. Try this:

{% include switch.html %}

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
</body>
{% endhighlight %}

Now you assigned your `div` to have a `black` border that is `5px` thick and `solid`. Let’s dissect the border property a little bit with a different border and a generic description:

{% include switch.html %}

{% highlight CSS %}
border: 20px dashed #ff88aa;
border: <line-width> || <line-style> || <color>;
{% endhighlight %}

Here you see an even thicker border that is not solid and has a different color, but is also `dashed` instead of `solid. The color is a good example for how many different types of values a lot of CSS properties accept. Let’s just say there are a lot more than would fit nicely on this page. Often you’ll find yourself searching the web for the accepted input values, or looking them up in the CSS spec (check links at the end of the tutorial). This color value is in HEX RGB notation. It can be convenient to use a color picker tool (you can find them online or even use good ol’ MSPaint!) to find the color you want and then just copy and paste the value from there.
