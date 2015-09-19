# CSSclasses Website

## Installation

This website is run by Jekyll and GitHub pages. To separate the source files from the files used for the live page this repo uses two active branches: `master` and `gh-pages`.
`master` contains all files, `gh-pages` only contains the files needed to serve the actual website.
To work with this environment follow these steps:
* `git clone git@github.com:cssconf/CSSclasses.git`
* `cd CSSclasses`
* `git clone git@github.com:cssconf/CSSclasses.git -b gh-pages _site`

This clones the source files into the CSSclasses projects folder and the generated `_site` content aka. `gh-pages` repository inside the `_site`folder.

* **Ruby** – Jekyll requires the Ruby language. If you have a Mac, you've most likely already got Ruby. If you open up the Terminal application, and run the command `ruby --version` you can confirm this. Your Ruby version should be at least `2.0.0`. If you've got that, you're all set. Skip to step #2. Otherwise, follow [these instructions](https://www.ruby-lang.org/en/downloads/) to install Ruby.

* **Jekyll** – Simply run the command, `gem install jekyll` and you're good to go.

* **Grunt CLI** – Run `npm install -g grunt-cli` if you have the Grunt CLI not already installed

* **Grunt Plugins** – Run `npm install`

* **Bower Dependencies** - Run `bower install`

* **Livereload Browser Extension** – [http://livereload.com/extensions/](http://livereload.com/extensions/)

## Run the project

After installing all dependencies run `grunt`. This triggers `jekyll serve` and also a Grunt watch task, Sass compiler and live reload. To access the page go to `localhost:4000`.

## Contributing

All changes have to be made and pushed inside the `master branch`.

## Publishing to the live page

To publish changes to the live page, run `grunt build` inside the `master` branch. This will trigger a bunch of Grunt tasks (to prepare the files) + Jekyll's build process. Afterwards `cd` into the `_site` folder. This will simultaneously change your branch to `gh-pages`. Commit your changes and push it to GitHub.

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
