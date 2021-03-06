# ember-data-github [![Build Status](https://travis-ci.org/jimmay5469/ember-data-github.svg?branch=master)](https://travis-ci.org/jimmay5469/ember-data-github) [![Ember Observer Score](http://emberobserver.com/badges/ember-data-github.svg)](http://emberobserver.com/addons/ember-data-github)

Ember Data library for the [GitHub API](https://developer.github.com/v3/).

## Using ember-data-github

```
ember install ember-data-github
```

In order to use OAuth endpoints you must also make sure you have a session service which contains a property named `githubAccessToken` with the currently logged in user's GitHub access token (Exmple: [app/services/session.js](https://github.com/jimmay5469/old-hash/blob/master/app/services/session.js)).

Examples:
```
this.get('store').find('githubUser', '#'); // get the current user
this.get('store').find('githubUser', 'jimmay5469'); // get a user
this.get('store').find('githubRepository', 'jimmay5469/old-hash'); // get a repository
this.get('store').find('githubBranch, 'jimmay5469/old-hash/branches/master'); // get a branch
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
