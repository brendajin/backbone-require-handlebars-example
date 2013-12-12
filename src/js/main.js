var paths = {
	backbone: '../lib/backbone-optamd3-min',
    jquery:'../lib/jquery-1.9.1.min',
	underscore: '../lib/underscore-min',
	handlebars: '../lib/handlebars.runtime',
	helpers: 'util/helpers'
}

var shim = {
	handlebars: {
		exports: 'Handlebars'
	}
}

// set up require.js 
require.config({
    baseUrl: './src/js/',
    paths: paths,
    shim: shim
});

require(["app"],function(App){
	// initialize our application
	App.initialize();
});