---
layout: post
title: "CSS More Selectors"
---

### More selectors: nth-child, nth-of-type, sibling
There are a few more selectors to select subsets out of many elements. `:nth-child`, `:nth-of-type` and the `~` sibling selector are a few common examples of css selectors that are often very useful.

The `:nth-child` is very useful if you have recurring elements with alternating styling. Take an unordered list for example: You want odd rows to be white, even rows to be a bit darker. You can assign different style rules to even list elements without messing with the HTML markup – which is handy when you have to change the styles again later. All you need to do is assign `li:nth-child(even) { background-color: #f3f3f3; }` to those list elements. Instead of even you could also use 2n to select any `2nd` element, `3n` for every third, `3n-1` for every third but starting with the second and so on.

<p data-height="381" data-theme-id="dark" data-slug-hash="rwVygY" data-default-tab="result" data-user="CSSclasses" data-embed-version="2" data-pen-title="CSSclasses nth-child" class="codepen">See the Pen <a href="https://codepen.io/team/CSSclasses/pen/rwVygY/">CSSclasses nth-child</a> by CSSclasses (<a href="https://codepen.io/CSSclasses">@CSSclasses</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

The `:nth-of-type` works almost like the `:nth-child`. But `:nth-child` doesn't care about what type the elements are. If you put a `div` in the middle of the list, `:nth-child` will treat that just like one of the list elements. That is where `:nth-of-type` is stricter: It only executes the rule on elements of the given selector.

The `~` sibling selector selects all elements that are *neighbors* of a selected element. So if you take the following example, simple rules can add dynamic behavior to your collection of fruits and vegetables:

<div class="m-switch">
  <input class="m-switch__input" id="dark" type="radio" name="theme" onchange="darkenEverything()">
  <label class="m-switch__label m-switch__label--is-dark" for="dark">Dark</label>
  <input class="m-switch__input" id="light" type="radio" name="theme" checked="checked" onchange="lightenEverything()">
  <label class="m-switch__label m-switch__label--is-light" for="light">Light</label>
</div>
{% highlight CSS %}
.vegetable-checkbox:checked ~ .vegetable { background-color: #aaf0bb; }

.fruit-checkbox:checked ~ .fruit { background-color: #ffaabb; }
{% endhighlight %}

While these rules look very complex, they are not so bad when you take them apart. The first selector `.vegetable-checkbox` looks for anything that has the class "vegetable-checkbox" in the HTML. By adding the `:checked` that rule only applies if it is a checkbox that is checked. Then the `~` indicates that another selector follows. This following selector in the end is our target that gets the styles in the rule, if there is any element in the neighborhood that is found by the first selector.

<p data-height="476" data-theme-id="dark" data-slug-hash="dRoWEY" data-default-tab="result" data-user="CSSclasses" data-embed-version="2" data-pen-title="CSSclasses :checked" class="codepen">See the Pen <a href="https://codepen.io/team/CSSclasses/pen/dRoWEY/">CSSclasses :checked</a> by CSSclasses (<a href="https://codepen.io/CSSclasses">@CSSclasses</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>