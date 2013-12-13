backbone-require-handlebars-example
===================================
An example of a "thumbnail" view using Backbone.js, Require,js, Handlebars

## Live demo
http://brendajin.github.io/backbone-require-handlebars-example/

### Run locally
* from the root of the project, run `python -m SimpleHTTPServer`
* view on `PORT 8000`

## To Compile Handlebars
The following steps only apply if you will be making changes to the Handlebars templates. They have the most basic setup possible to get you started. For larger projects, research more advanced configurations.

### Requirements
* [node.js](http://nodejs.org/) for npm (node package manager) so you can get the other compilation tools
* [grunt-cli](http://gruntjs.com/getting-started) command line interface for automation

### Instructions
* Clone the repository
* From project root, run `npm install`
* Make template changes in `src/templates/raw`
* Run `grunt` or `grunt handlebars` to compile the handlebars templates
* Template will be compiled in `src/templates/compiled`
* If you add a template, you will need to change the `Gruntfile.js`
* If you would like for Grunt to compile after every change, check out [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)