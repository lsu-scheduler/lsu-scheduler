# lsu-scheduler (https://lsu-scheduler.herokuapp.com/)

This README outlines the details of collaborating on this Ember/nodejs
application hosted freely by Heroku.

https://lsu-scheduler.herokuapp.com/.

A short introduction of this app could easily go here.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM) and [Bower](http://bower.io/)
* [ember-cli](http://www.ember-cli.com/)

That's all you need for development.

To deploy, you also need to be setup with Heroku. There are
guides for that at the bottom under Useful Links.

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

* Build ember with the command `ember build --environment=production`
* Commit changes
  * `git add ./dist -f`
  * `git commit -m "Deploy: add ember ./dist folder"`
* Deploy to Heroku with `git push heroku master`

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* Getting Started with Node.js on Heroku (https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* Getting Started with Node.js on Heroku: (https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
* Getting Started with Node.js on Heroku: Provision a database (https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)
