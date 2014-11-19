# [lsu-scheduler](https://lsu-scheduler.herokuapp.com/)

This README outlines the details of collaborating on this [Ember](http://emberjs.joefiorini.com/)/[Node.js](http://nodejs.org/)
application hosted freely by [Heroku](https://heroku.com/).

You might want to check out the [documentation](http://lsu-scheduler.herokuapp.com/docs).

## Getting Started

Are you new to git? I urge you to complete [this interactive git tutorial](http://pcottle.github.io/learnGitBranching/).

Is Ember new to you? Read the [ember-cli Beginner Tutorial](http://www.codeomnib.us/ember-cli-beginner-tutorial/)

## Frontend

### Prerequisites

You will need the following things properly installed on your computer.

#### Git
* [Getting Started Installing Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

#### Node.js
* [How to Install Node.js](http://howtonode.org/how-to-install-nodejs)

#### Bower
* [How to Install Bower](http://bower.io/)

#### ember-cli
* [How to Install ember-cli](http://www.ember-cli.com/)

### Installation

```bash
$ git clone git://github.com/lsu-scheduler/lsu-scheduler.git
$ cd lsu-scheduler
$ npm install
$ bower install
```

### Running / Development

* `ember server`
* Visit your app at http://localhost:4200.

Check out [ember-cli](http://www.ember-cli.com/), it controls all your developments.

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Backend

### Running / Development

* `ember server`
* Configure your local database in `./models/index.js`
* `node index.js`
* Change `lsu-scheduler.herokuapp.com/api` to `localhost:5000/api` in
`./app/adapters/application.js`
* Visit your app at http://localhost:5000 or http://localhost:4200.

Api calls come from http://localhost:5000/api

`node index.js` must be restarted to show changes, it does not auto refresh on file changes
like `ember s` does

Check out the [project dependencies](https://lsu-scheduler.herokuapp.com/stack), they are all documented extremely well.

## Documentation

### Install Yuidoc

* 'Run npm -g install yuidocjs'

### Write Internal Documentation

Check out this [syntax reference](http://yui.github.io/yuidoc/syntax/index.html), to make sure you use the right tags and format

### Generate External Documentation

I found it works best when you create a seperate directory to generate your external documentation in
and add the files and folders you want external documentation for in that directory. I only do this since 
I havent figured out how to ignore files.

* Create a Documentation folder
* Copy the files and folder that you want to generate external documentation for into the Documentation folder
* Run yuidoc . 

yuidoc will create a directory named 'out' and the html file will be in there

## Further Reading / Useful Links

* ember: http://emberjs.com/
* ember-cli: http://www.ember-cli.com/
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
* Getting Started with Node.js on Heroku (https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* Getting Started with Node.js on Heroku: (https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
* Getting Started with Node.js on Heroku: Provision a database (https://devcenter.heroku.com/articles/getting-started-with-nodejs#provision-a-database)
