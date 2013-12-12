var paths = {
	backbone: '../lib/backbone-optamd3-min',
    jquery:'../lib/jquery-1.9.1.min',
	underscore: '../lib/underscore-min',
	handlebars: '../lib/handlebars.runtime',
}

var shim = {
	handlebars: {
		exports: 'Handlebars'
	}
}

require.config({
    baseUrl: '/src/js/',
    paths: paths,
    shim: shim
});

require(["app"],function(App){
	App.initialize();
});