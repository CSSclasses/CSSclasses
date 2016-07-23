# CSSclasses Website

## Installation

This website is run by Jekyll and GitHub pages. To work with this environment follow these steps:
* `git clone git@github.com:CSSclasses/CSSclasses.git`

* `cd CSSclasses`

* **Ruby** – Jekyll requires the Ruby language. If you have a Mac, you've most likely already got Ruby. If you open up the Terminal application, and run the command `ruby --version` you can confirm this. Your Ruby version should be at least `2.0.0`. If you've got that, you're all set. Skip to step #2. Otherwise, follow [these instructions](https://www.ruby-lang.org/en/downloads/) to install Ruby.

* **Gems Dependencies** – In order to install all of the gems we need, please run the following: `gem install bundler`. Now you're ready to install everything with one command: `bundle install` and you're good to go.

* **Grunt Plugins** – Run `npm install` (we recommend turning off the progress bar since it speeds up the npm by `npm set progress=false`)

* **Bower Dependencies** - Run `bower install`

* **Livereload Browser Extension** – [http://livereload.com/extensions/](http://livereload.com/extensions/)

## Run the project

After installing all dependencies run `npm start`. This triggers `jekyll serve` and also a Grunt watch task, Sass compiler and live reload. To access the page go to `localhost:4000`.

## Contributing

All changes have to be made and pushed inside the `master` branch.

## Publishing to the live page

To publish changes to the live page, run `npm run deploy`. This triggers a Grunt task that commits all your changes from the build destination directory `_site` to the `gh-pages` branch, and pushes it to the remote repository.

## Browser Support
This project only supports the latest versions of Chrome, Firefox and Safari.

## Content Guidelines
### Images
Images always have to have a ratio of 3:2.

## Coding Guidelines

### General
* If you want to change or add stuff to the project make sure to check for already existing modules, classes, styles and so on.

### Scss
* `@include`, `@extend` always has to come first in a rule set except `.@include bp()`.
* Use relative unites like `em`, `rem`, `%` `v-units` exclusively.
* There are no `px` units allowed inside this project.
* For `margin` and `padding` always mulitply or divide the `$base-unit`.
* Use the predefined color variables from `_variables`.
