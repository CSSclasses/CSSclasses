#!/bin/bash

set -o errexit -o nounset

if [ "$TRAVIS_BRANCH" != "master" ]
then
  echo "This commit was made against the $TRAVIS_BRANCH and not the master! No deploy!"
  exit 0
fi

rev=$(git rev-parse --short HEAD)
author_name=$(git log --max-count=1 --format=%an)
author_email=$(git log --max-count=1 --format=%ae)

cd _site

git init
git config user.name "$author_name"
git config user.email "$author_email"

git remote add upstream "https://$GH_TOKEN@github.com/CSSclasses/CSSclasses.git"
git fetch upstream
git reset upstream/gh-pages

git add -f ./
git commit -m "rebuild pages at ${rev}"
git push -q upstream HEAD:gh-pages